import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import Header from '../Header/Header'
import style from "./Places.module.css";
import { Link } from 'react-router-dom'


const Places = () => {
  const [places, setPlaces] = useState([]);
  const [currid, setCurrtId] = useState("");

  const getPlaces = async () => {
    db.collection("places").onSnapshot((resFb) => {
      const docs = [];
      resFb.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPlaces(docs);
    
    });
  };
  const onDelete = async (id) => {
    console.log();
    if (window.confirm("Areyou sure you want to delete this place?")) {
      await db.collection("places").doc(id).delete();
     
    }
  };

  useEffect(() => {
    getPlaces();
  }, []);


  return (
    <>
      <div>
        <div>
        <Link className={style.createBtn} to="/create">Create new Place</Link>
          {places.map((place) => (
            <>
              <Link
                to= {`/details/${currid}`}
                key={place.id}
                
                className={style.textOverImage}
                data-title={place.name}
                data-text={place.description}
              >
                <img className={style.image} src={place.imageUrl} alt="" />
              </Link>
              
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Places;
