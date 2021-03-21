import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import style from "./Places.module.css";

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [currid, setCurrtId] = useState("");

  const getPlaces = async () => {
    db.collection("places").onSnapshot((resFb) => {
      const docs = [];
      resFb.forEach((doc) => {
        setCurrtId(doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPlaces(docs);
    
    });
  };
  useEffect(() => {
    getPlaces();
  }, []);


  return (
    <>
      <div>
        <div>
          {places.map((place) => (
            <>
              <a
                href= {`/details/${currid}`}
                key={place.id}
                
                className={style.textOverImage}
                data-title={place.name}
                data-text={place.description}
              >
                <img className={style.image} src={place.imageUrl} alt="" />
              </a>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Places;
