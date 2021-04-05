import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";



const Details = (props) => {

  const [place, setPlace] = useState([]);
  const params = useParams();

 



 return(
   <>
   <h1>{place.name}</h1>
   <img src={place.imageUrl} alt=""/>
   <h3>{place.description}</h3>
<button>Delete</button>
<button>Edit</button>
     </>
 )
};

export default Details;