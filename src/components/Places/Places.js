import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import AddPlace from '../AddPlace/AddPlace'

const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        AddPlace.getPlace(setPlaces);
    }, [AddPlace, places])

  return (
      <p>dxsvfvfkbdckbcdkbcdbkcdzbkcdbkcdbkcdkbcdcdkb</p>
  );
};

export default Places;
