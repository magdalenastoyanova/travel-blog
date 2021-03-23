import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { toast } from "react-toastify";

const initialState = {
  name: '',
  imageUrl: '',
  descrption: '',
}


const Details = (props) => {


  
 return(
   <>
     <img src={places.imageUrl} />
     <h1>{places.name}</h1>
     <p>
       {places.description}
     </p>
     </>
 )
};

export default Details;