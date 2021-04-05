import React, { useEffect, useState } from "react";
import {Form, Input, Button} from 'antd';
import { auth, db } from "../firebase/config";
import Header from '../Header/Header'
import { useHistory } from 'react-router-dom'
import style from './AddPlace.module.css'
import { toast } from "react-toastify";


const AddPlace = () => {
  const history = useHistory()
  const [userLoggedIn, setUserLoggedIn] = useState(null)

  const [place, setPlace] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
            // user has logged in
            setUserLoggedIn(authUser)

        } else {
            // user has logged out
            setUserLoggedIn(null)
        }
    })

    return () => {
        unsubscribe()
    }
}, [userLoggedIn])

const create = () => {

  if (place === '') {
      alert('Place name must not be empty');
      return;
  }
  if (!imageUrl) {
    return alert('Please enter image Url.')
}
if (!description) {
    return alert('Please enter description.')
}
// Limit length of caption text
if (description.length > 100) {
  return alert('Please add description fewer than 100 symbols.')
}

  try {
  db.collection('places').add({
    place: place,
    imageUrl: imageUrl,
    description: description
  })
  history.push('/places')
  } catch (error) {
      alert(error)
  }

}
const onChangeHandler = (event) => {
  const { name, value } = event.currentTarget;

  if (name === 'place') {
      setPlace(value)
  }
  else if (name === 'imageUrl') {
    setImageUrl(value);
  }
  else if (name === 'description') {
      setDescription(value);
  }
}
   
  return (
    
         <>
      <h1 className={style.title}>Add Your New Visited Place</h1>
      <article className={style.formWrapper}>
        <article className={style.photo}></article>
      <Form  className={style.form}>
        <Form.Item label="Name" className= "place" >
          <Input name="place"  onChange={(event) => onChangeHandler(event)} />
        </Form.Item>
        <Form.Item className="photo" label="Photo" className= "imageUrl" >
          <Input name="imageUrl" onChange={(event) => onChangeHandler(event)} />
        </Form.Item>
        <Form.Item label="Description" >
          <Input.TextArea  name="description" onChange={(event) => onChangeHandler(event)}/>
        </Form.Item>
        <Form.Item>
          <Button onClick={create} name="button" className={style.btn}
          type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </article>
      </>

  );
};

export default AddPlace;
