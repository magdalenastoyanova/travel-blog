import React, { useContext, useEffect, useState, useCallback } from "react";
import { Button } from "antd";
import firebase from "../firebase/config";
import { Link, useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import UserContext from '../../Context'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { toast } from "react-toastify";

const Details = (props) => {
  const [place, setPlace] = useState("");
  const params = useParams();

  const history = useHistory()
  const { isLoggedIn, appUser } = useContext(UserContext);

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
  }, [params.placeId, props.history]);

  async function deletePlace() {
    try{
      let checkConfirmation = window.confirm('Are you sure you want to delete your post?')
        
      await firebase.deletePlace(place.id, appUser.uid) 
       history.push('/places');
      
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
    <Header />
      <h1>{place.place}</h1>
      <img src={place.imageUrl} alt="" />
      <h3>{place.description}</h3>

      <Button onClick={deletePlace}>Delete</Button>
      <Button><Link to={`/edit/${place.id}`}>Edit </Link></Button>
      <Footer />
    </>
  );
};

export default Details;
