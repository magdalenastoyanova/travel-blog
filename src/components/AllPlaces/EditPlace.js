import React, { useState, useCallback, useEffect } from 'react';
import  { useHistory, useParams } from 'react-router-dom';
import {Form, Input, Button} from 'antd';
import UserContext from '../../Context'
import Header from '../Header/Header';
import firebase from '../firebase/config'
import { toast } from "react-toastify";

const EditPlace = (props) => {
    const history = useHistory();

    const [place, setPlace] = useState(null);
  
    const params = useParams();

    async function edit() {

        if (place.place === '') {
            toast.success(`You must fill the place's name.`, {
                type: "error",
                autoClose: 2000,
                position: "top-center",
            })
        }
        if (place.imageUrl === '') {
            toast.success(`You must add photo of the visited place.`, {
                type: "error",
                autoClose: 2000,
                position: "top-center",
            })
            return;
        }

        if (place.description === '') {
            toast.success(`You must add larger description.`, {
                type: "error",
                autoClose: 2000,
                position: "top-center",
            })
        }

        try {
            await firebase.editPlace(place.id, place.place, place.imageUrl, place.description)
            toast.success(`Successfully edited the place.`, {
                type: "success",
                autoClose: 2000,
                position: "top-center",
            })
            history.push(`/places/${place.id}`)

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
            setPlace({ ...place, place: value })
        }
        else if (name === 'imageUrl') {
            setPlace({ ...place, imageUrl: value })
        }
        else if (name === 'description') {
            setPlace({ ...place, description: value })
        }
    }

    const getData = useCallback(async () => {
        const id = params.placeId;
        const db = firebase.db;

        await db.collection("places").doc(id).get()
            .then(function (doc) {
                if (doc.exists) {
                    setPlace({ ...doc.data(), id: doc.id });
                } else {
                    props.history.push('/places');
                }
            })
    }, [params.placeId, props.history])

    useEffect(() => {
        getData();
    }, [getData])
    return (
       <>
      <h1 >Edit Your Visited Place</h1>
      <article >
        <Header />
      <Form >
        <Form.Item label="Name" >
          <Input name="place" onChange={(event) => onChangeHandler(event)} defaultValue={place.place}  />
        </Form.Item>
        <Form.Item  label="Photo" className= "imageUrl" >
          <Input name="imageUrl" onChange={(event) => onChangeHandler(event)} defaultValue={place.imageUrl}/>
        </Form.Item>
        <Form.Item label="Description" >
          <Input.TextArea  name="description" onChange={(event) => onChangeHandler(event)} defaultValue={place.description} />
        </Form.Item>
        <Form.Item>
          <Button  onClick={edit} name="button" 
          type="primary" htmlType="submit">
            Edit
          </Button>
        </Form.Item>
      </Form>
      </article>
      </>
    )
}

export default EditPlace;