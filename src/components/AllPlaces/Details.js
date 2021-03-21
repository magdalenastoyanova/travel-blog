import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { toast } from "react-toastify";


const Details = () => {
 
 const [places, setPlaces] = useState([]);
  const [currid, setCurrtId] = useState("");

  db.collection('places').get().then((doc) => {
 
    console.log(doc);
  })
  
 return(
     <h1>{places.name}</h1>
 )
};

export default Details;