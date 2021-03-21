import React, { useEffect, useState } from "react";
import AddPlaceForm from "./AddPlaceForm";
import { db } from "../firebase/config";
import { toast } from "react-toastify";

const AddPlace = () => {
  const [places, setPlaces] = useState([]);
  const [currid, setCurrId] = useState("");

  const addOrEdit = async (newObject) => {
    try {
      if (currid === "") {
        await db.collection("places").doc().set(newObject);
        toast("New place added!", {
          type: "success",
        });
      } else {
        await db.collection("places").doc(currid).update(newObject);
        toast("Place updated sucessfully!", {
          type: "info",
        });
        setCurrId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async (id) => {
    if (window.confirm("Areyou sure you want to delete this place?")) {
      await db.collection("places").doc(id).delete();
      toast("Place deleted sucsessfully!", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <div>
        <AddPlaceForm {...{ addOrEdit, currid, places }} />
      </div>
    </>
  );
};

export default AddPlace;
