import React, { useRef, useEffect } from "react";

import classes from "./Map.module.scss";

function Map({ center }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: 13,
    });

    new window.google.maps.Marker({ position: center, mapDiv: map });
  }, [mapRef, center]);

  return <div className={classes.map} ref={mapRef} id="map" />;
}

export default Map;
