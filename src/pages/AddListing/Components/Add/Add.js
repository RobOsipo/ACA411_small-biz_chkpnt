import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./Add.module.scss";

const Add = ({ setCenter, center }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  const [newListing, setNewListing] = useState({
    name: "",
    address: "",
    hours: "",
    description: "",
  });

  const handleSave = () => {
    dispatch({ type: "ADD", payload: newListing });
    navigate("/", { replace: true });
  };

  const handleChange = (e) => {
    setNewListing({
      ...newListing,
      [e.target.name]: e.target.value,
    });
  };

  const handleConvert = async () => {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        newListing.address
      )}&key=${process.env.REACT_APP_MAP_VAR}`
    );

    const data = response.data;

    if (!data || data.status === "ZERO_RESULTS") {
      console.alert("That Address Does Not Convert, Please Try Another");
    }

    const coordinates = data.results[0].geometry.location;

    setCenter(coordinates);

    dispatch({
      type: "ADD_COORDS",
      payload: coordinates || { lat: 30.2492065201923, lng: -97.749508023262 },
    });
  };

  return (
    <div className={classes.add}>
      <input
        className={classes.input}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className={classes.input}
        onChange={handleChange}
        type="text"
        placeholder="Address"
        name="address"
      />
      <input
        className={classes.input}
        onChange={handleChange}
        type="text"
        placeholder="Hours"
        name="hours"
      />
      <input
        className={classes.input}
        onChange={handleChange}
        type="text"
        placeholder="Description"
        name="description"
      />
      <button onClick={handleConvert} className={classes.button}>
        Convert Address to Google Maps
      </button>
      <button onClick={handleSave} className={classes.button}>
        Save
      </button>
    </div>
  );
};

export default Add;
