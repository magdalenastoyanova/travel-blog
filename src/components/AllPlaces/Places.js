import React, { useEffect, useState, useContext } from "react";
import firebase from "../firebase/config";
import Header from "../Header/Header";
import style from "./Places.module.css";
import { Link } from "react-router-dom";
import userContext from "../../Context";

const Places = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => { 
    const fetchData = async () => {
      const db = firebase.db;
      const data = await db
        .collection("places")
        .get();
        setPlaces(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  }, [places]);

  return (
    <>
      <div>
        <div>
          <Link className={style.createBtn} to="/create">
            Create new Place
          </Link>
          {places.map((place) => (
            <>
              <Link
                to={`/details/`}
                key={place.id}
                className={style.textOverImage}
                data-title={place.place}
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
