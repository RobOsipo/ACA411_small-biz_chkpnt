import React from "react";
import { useSelector } from "react-redux";
import Map from "../../SharedComponents/Map/Map";
import classes from "./Details.module.scss";


const Details = () => {

const businessArray = useSelector(state => state.businesses)
const coords = useSelector(state => state.coords)


const { name, address, hours, description } = businessArray[businessArray.length - 1]

  return (
    <div className={classes["main-container"]}>
      <h1>{name}</h1>
      <h4>{address}</h4>
      <h4>{hours}</h4>
      <p>{description}</p>

      <div className={classes["image-container"]}>
        <Map zoom={16} center={coords} />
        {/* <img
          className={classes.image}
          src="https://imgs.search.brave.com/j0G5sw5zcPQ1WoC7doMKCLmOv3cVfXWNtt0KZS27nzY/rs:fit:572:400:1/g:ce/aHR0cDovL3d3dy5k/ZXN0aW5hdGlvbjM2/MC5jb20vbm9ydGgt/YW1lcmljYS91cy90/ZXhhcy9hdXN0aW4v/bm9ydGhjcm9zcy1z/dWl0ZXMtYXVzdGlu/LW53LW1hcC5naWY.gif"
          alt="google maps"
        /> */}
      </div>
    </div>
  );
};

export default Details;
