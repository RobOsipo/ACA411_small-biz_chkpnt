import React from "react";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import MapTable from './Components/MapTable/MapTable'
import DeleteIcon from '../../icons/DeleteIcon'

import cookie from 'cookie'
import classes from "./Listings.module.scss";

const Listings = () => {

    const cookies = cookie.parse(document.cookie);

    let isAdmin = cookies['loginToken']


    const businessArray = useSelector(state => state)
   

    const mapTable = () => {
      return businessArray.map((place, index) => {
        return <MapTable key={index} index={index} name={place.name} hours={place.hours} address={place.address} description={place.description}  />
      })
    }
    



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
