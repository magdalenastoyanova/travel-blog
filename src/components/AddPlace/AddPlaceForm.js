import React,  { useState } from "react";
import { Form, Input,  Button } from "antd";
import style from './AddPlace.module.css'


const AddPlaceForm = (props) => {

  const initialValues = {
    place: '',
    imageUrl: '',
    description: ''
  }

   const[values, setValues] =  useState(initialValues);

   const handleInput =(e) => {
     const { name, value } = e.target;
     setValues({...values, [name]: value})
   }

    const handleSubmit = (e) =>{
       e.preventDefault();
       props.addOrEdit(values);
       setValues({...initialValues})
  }
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
  
};

export default AddPlaceForm;
