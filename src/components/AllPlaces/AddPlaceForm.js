import React,  { useState, useEffect} from "react";
import { Form, Input,  Button } from "antd";
import style from './AddPlace.module.css'
import { db } from "../firebase/config";
import { toast } from "react-toastify";


const AddPlaceForm = (props) => {

  const initialValues = {
    place: '',
    imageUrl: '',
    description: ''
  }

   const[values, setValues] =  useState(initialValues);

   const handleInput = (e) => {
     const { name, value } = e.target;
     setValues({...values, [name]: value})
   }
    const getPlaceById = async(id) => {
      const doc = await db.collection('places').doc(id).get(); 
      setValues({...doc.data()})
    }

  //  const validateUrl = (str) => {


    const handleSubmit = (e) =>{
       e.preventDefault();
      
       //if(!validateUrl(values.imageUrl)){
       // return toast('Invalid Url', {
         //  type: 'warning',
         //  autoClose: 1000,
         //})
       //}

       props.addOrEdit(values);
       setValues({...initialValues})
  }
  useEffect(() => {
    if(props.currid ===''){
      setValues({...initialValues})
    } else{
        getPlaceById(props.currid);
    }
  }, [props.currid])
  
    return (
      <>
      <h1 className={style.title}>Add Your New Visited Place</h1>
      <article className={style.formWrapper}>
       
        <article className={style.photo}></article>
      <Form  className={style.form}>
        <Form.Item label="Name" className= "place" >
          <Input name="place"  onChange={handleInput} value={values.place} />
        </Form.Item>
        <Form.Item className="photo" label="Photo" className= "imageUrl" >
          <Input name="imageUrl"  onChange={handleInput} value={values.imageUrl} />
        </Form.Item>
        <Form.Item label="Description" >
          <Input.TextArea  name="description"  onChange={handleInput} value={values.description} />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleSubmit} name="button" className={style.btn}
          type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </article>
      </>
    )
    } 

export default AddPlaceForm;
