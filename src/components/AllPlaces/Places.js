import React, { useEffect, useState, useContext } from "react";
import firebase from "../firebase/config";
import Header from "../Header/Header";
import style from "./Places.module.css";
import { Link } from "react-router-dom";

const Places = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const db = firebase.db;
    db.collection("places").onSnapshot((snapshot) => {
      setPlaces(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          place: doc.data(),
        }))
      );
    });
  }, [places]);

  return (
    <>
      <div>
        <Header />
        <div>
          <Link className={style.createBtn} to="/create">
            Create new Place
          </Link>
          {places.map(({ id, place }) => {
            return (
              <Link
                to={`/details/`}
                className={style.textOverImage}
                key={id}
                data-title={place.place}
                data-text={place.description}
              >
                <img className={style.image} src={place.imageUrl} alt="" />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Places;
