import React, { useState, useCallback, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Input, Button } from "antd";
import UserContext from "../../Context";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import firebase from "../firebase/config";
import style from "./Edit.module.css";
import photo from "../images/details.jpg";
import { toast } from "react-toastify";

const EditPlace = (props) => {
  const history = useHistory();

  const [place, setPlace] = useState('');

  const params = useParams();
  async function edit() {
    if (place.place === "") {
      toast.success(`You must fill the place's name.`, {
        type: "error",
        autoClose: 2000,
        position: "top-center",
      });
      return;
    }
    if (place.imageUrl === "") {
      toast.success(`You must add photo of the visited place.`, {
        type: "error",
        autoClose: 2000,
        position: "top-center",
      });
      return;
    }

    if (place.description === "") {
      toast.success(`You must add larger description.`, {
        type: "error",
        autoClose: 2000,
        position: "top-center",
      });
      return;
    }

    try {
      await firebase.editPlace(
        place.id,
        place.place,
        place.imageUrl,
        place.description
      );
      toast.success(`Successfully edited the place.`, {
        type: "success",
        autoClose: 2000,
        position: "top-center",
      });
      history.push(`/places/${place.id}`);
    } catch (error) {
      toast.success(`${error}`, {
        type: "error",
        autoClose: 2000,
        position: "top-center",
      });
    }
  }

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "place") {
      setPlace({ ...place, place: value });
    } else if (name === "imageUrl") {
      setPlace({ ...place, imageUrl: value });
    } else if (name === "description") {
      setPlace({ ...place, description: value });
    }
  };

  const getData = useCallback(async () => {
    const id = params.placeId;
    const db = firebase.db;

    await db
      .collection("places")
      .doc(id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setPlace({ ...doc.data(), id: doc.id });
        } else {
          props.history.push("/places");
        }
      });
  }, [params.placeid, props.history]);

  useEffect(() => {
    getData();
  }, [getData]);
 
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url(${photo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          width: "100%",
          height: "100vh",
          color: "white",
          opacity: "0.8",
        }}
      />
      <div className={style.loginBox}>
        <h1 className={style.title}>
          Edit Your Visited Place
        </h1>
        <article>
          <Form>
            <Form.Item label="Name" className={style.placeBox}>
              <Input
                className={style.addInput}
                id="place"
                name="place"
                type="text"
                value={place.place}
                onChange={(event) => onChangeHandler(event)}   
              />
            </Form.Item>
            <Form.Item label="Photo" className={style.imageUrlBox}>
              <Input
                className={style.addInput}
                type="text"
                name="imageUrl"
                value={place.imageUrl}
                onChange={(event) => onChangeHandler(event)}
              />
            </Form.Item>
            <Form.Item label="Description" className={style.descriptionBox}>
              <Input.TextArea
                className={style.addInput}
                type="text"
                name="description"
                value={place.description}
                onChange={(event) => onChangeHandler(event)}
              />
            </Form.Item>
            <Form.Item>
              <Button
                className={style.editBtn}
                onClick={edit} 
                name="button"
                type="primary"
                htmlType="submit"
              >
                Edit
              </Button>
            </Form.Item>
          </Form>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default EditPlace;
