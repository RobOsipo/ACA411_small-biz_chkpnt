import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import Map from "../../SharedComponents/Map/Map";
import Add from "./Components/Add/Add";

import classes from "./AddListing.module.scss";

const AddListing = () => {
  const [center, setCenter] = useState({ lat: 30.267153, lng: -97.7430608 });
  const flag = useSelector((state) => state.loginIdentifier);

  useEffect(() => {
    console.log('component rerender')
  }, [flag])

  return (
    <div className={classes["main-container"]}>
      <Add center={center} setCenter={setCenter} />
      <div className={classes["image-container"]}>
        <Map zoom={16} center={center} />
        {/* <img
          className={classes.image}
          src="https://imgs.search.brave.com/j0G5sw5zcPQ1WoC7doMKCLmOv3cVfXWNtt0KZS27nzY/rs:fit:572:400:1/g:ce/aHR0cDovL3d3dy5k/ZXN0aW5hdGlvbjM2/MC5jb20vbm9ydGgt/YW1lcmljYS91cy90/ZXhhcy9hdXN0aW4v/bm9ydGhjcm9zcy1z/dWl0ZXMtYXVzdGlu/LW53LW1hcC5naWY.gif"
          alt="google maps"
        /> */}
      </div>
    </div>
  );
};

export default AddListing;
