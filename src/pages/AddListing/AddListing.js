import React, { useState } from "react";
import Map from "../../SharedComponents/Map/Map";
import Add from "./Components/Add/Add";

import classes from "./AddListing.module.scss";

const AddListing = () => {
  const [center, setCenter] = useState({ lat: 30.267153, lng: -97.7430608 });
  const handleMapChange = (e) => {
    setCenter({
      ...center,
      [e.target.name]: Number(e.target.value),
    });
  };

  return (
    <div className={classes["main-container"]}>
      <Add />
      <div className={classes["image-container"]}>
        <input
          className={classes.input}
          onChange={(e) => handleMapChange(e)}
          type="text"
          name="lat"
          id="lat"
          placeholder="latitude"
        />
        <input
          className={classes.input}
          onChange={(e) => handleMapChange(e)}
          type="text"
          name="lng"
          id="lng"
          placeholder="longitude"
        />
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
