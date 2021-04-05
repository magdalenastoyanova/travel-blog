import React, { useState } from "react";
import {Form, Input, Button} from 'antd';
import firebase from "../firebase/config";
import { useHistory } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import style from './AddPlace.module.css'
import { toast } from "react-toastify";


const AddPlace = (props) => {
  const history = useHistory()

  const [place, setPlace] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');


  async function create() {

    if (place === '') {
      toast.success(`You must fill the place's name.`, {
        type: "error",
        autoClose: 2000,
        position: "top-center",
    })
        return;
    }
    if (imageUrl === '') {
      toast.success(`You must add photo of the visited place.`, {
        type: "error",
        autoClose: 2000,
        position: "top-center",
    })
    }
    if(description.length < 10){
      toast.success(`You must add larger description.`, {
        type: "error",
        autoClose: 2000,
        position: "top-center",
    })
    }

    try {
        await firebase.createPlace(place, imageUrl, description)
        toast.success(`Successfully added new place.`, {
          type: "errsuccessor",
          autoClose: 2000,
          position: "top-center",
      })
        history.push('/places');

    } catch (error) {
      toast.success(`${error}`, {
        type: "error",
        autoClose: 2000,
        position: "top-center",
    })
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
         <Header />
      <h1 className={style.title}>Add Your New Visited Place</h1>
      <article className={style.formWrapper}>
        <article className={style.photo}></article>
      <Form  className={style.form}>
        <Form.Item label="Name" className= "place" >
          <Input name="place" value={place} onChange={(event) => onChangeHandler(event)} />
        </Form.Item>
        <Form.Item className="photo" label="Photo" className= "imageUrl" >
          <Input name="imageUrl" value={imageUrl} onChange={(event) => onChangeHandler(event)} />
        </Form.Item>
        <Form.Item label="Description" >
          <Input.TextArea  name="description" value={description} onChange={(event) => onChangeHandler(event)}/>
        </Form.Item>
        <Form.Item>
          <Button onClick={create} name="button" className={style.btn}
          type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </article>
      <Footer />
      </>

  );
};

export default AddPlace;
