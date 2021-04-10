import React, { useState } from "react";
import {Form, Input, Button} from 'antd';
import firebase from "../firebase/config";
import { useHistory } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import style from './AddPlace.module.css'
import photo from '../images/addPlace.jpeg'
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
    if (imageUrl == '') {
      toast.success(`You must add photo of the visited place.`, {
        type: "error",
        autoClose: 2000,
        position: "top-center",
    })
    return;
    }
    if(description.length < 10){
      toast.success(`You must add larger description.`, {
        type: "error",
        autoClose: 2000,
        position: "top-center",
    })
    return;
    }

    try {
        await firebase.createPlace(place, imageUrl, description)
        toast.success(`Successfully added new place.`, {
          type: "success",
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
         <div style={{
         backgroundImage: `url(${photo})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover',position: 'relative', width:'100%',height:'100vh',color:'white', opacity: '0.8'
      }}/>
         <div className={style.loginBox}>
      <h1 className={style.title}>Add Your New Visited Place</h1>
      <article className={style.formWrapper}>
      
      <Form >
        <Form.Item label="Place Name" className= {style.placeBox} >
          <Input name="place" className= {style.addInput} value={place} onChange={(event) => onChangeHandler(event)} />
        </Form.Item>
        <Form.Item className= {style.imageUrlBox} label="Photo" >
          <Input className= {style.addInput} name="imageUrl" value={imageUrl} onChange={(event) => onChangeHandler(event)} />
        </Form.Item>
        <Form.Item label="Description" className= {style.descriptionBox}>
          <Input.TextArea className= {style.addInput} name="description" value={description} onChange={(event) => onChangeHandler(event)}/>
        </Form.Item>
        <Form.Item>
        <span className={style.span}></span>
        <span className={style.span}></span>
        <span className={style.span}></span>
        <span className={style.span}></span>
          <Button onClick={create} name="button" className={style.addBtn}
          type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
      </article>
      </div>
      <Footer />
      </>

  );
};

export default AddPlace;
