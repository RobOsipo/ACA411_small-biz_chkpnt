import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MapTable from "./Components/MapTable/MapTable";

import cookie from "cookie";
import classes from "./Listings.module.scss";

const Listings = () => {
  const cookies = cookie.parse(document.cookie);
  let isAdmin = cookies["loginToken"];

  const businessArray = useSelector((state) => state.businesses);
  const flag = useSelector((state) => state.loginIdentifier);

  const mapTable = () => {
    return businessArray.map((place, index) => {
      return (
        <MapTable
          key={index}
          index={index}
          name={place.name}
          hours={place.hours}
          address={place.address}
          description={place.description}
        />
      );
    });
  };

  useEffect(() => {
    console.log("listings re-render");
  }, [isAdmin, flag]);

  return (
    <div className={classes["main-container"]}>
      <table className={classes.topTable}>
        <tr className={classes.topRow}>
          <th>Name</th>
          <th>Description</th>
          <th>Hours</th>
          <th>Address</th>
          {isAdmin && <th>Delete</th>}
        </tr>
      </table>

      {mapTable()}
    </div>
  );
};

export default Listings;
