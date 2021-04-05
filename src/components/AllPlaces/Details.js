import React, { useContext, useEffect, useState, useCallback } from "react";
import firebase from "../firebase/config";
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";

const Details = (props) => {

  const [place, setPlace] = useState('');
  const params = useParams();
 
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
  getData()
}, [getData])

 return(
   <>
   <h1>{place.place}</h1>
   <img src={place.imageUrl} alt=""/>
   <h3>{place.description}</h3>
<button>Delete</button>
<button>Edit</button>
     </>
 )
};

export default Details;