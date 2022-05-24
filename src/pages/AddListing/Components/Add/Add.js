import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./Add.module.scss";

const Add = () => {
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
      <button onClick={handleSave} className={classes.button}>
        Save
      </button>
    </div>
  );
};

export default Add;
