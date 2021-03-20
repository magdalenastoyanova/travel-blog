import React, { useEffect, useState } from "react";
import AddPlaceForm from "./AddPlaceForm";
import { db } from "../firebase/config";

const AddPlace = () => {

   const [places, setPlaces] = useState([]);

  const addOrEdit = async (newObject) => {
    await db.collection("places").doc().set(newObject);
    console.log(newObject);
  };
  const getPlaces = async () => {
    db.collection("places").onSnapshot((resFb) => {
        const docs = [];
      resFb.forEach((doc) => {
        console.log(doc.data());
        docs.push({...doc.data(), id: doc.id})
      });
      setPlaces(docs);
    });
  };
  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <div>
      <AddPlaceForm addOrEdit={addOrEdit} />
    </div>
  );
};

export default AddPlace;
