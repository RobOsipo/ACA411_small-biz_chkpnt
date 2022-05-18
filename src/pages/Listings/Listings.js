import React from "react";
import {Link} from 'react-router-dom'
import DeleteIcon from '../../icons/DeleteIcon'

import cookie from 'cookie'
import classes from "./Listings.module.scss";

const Listings = () => {

    const cookies = cookie.parse(document.cookie);

    const isAdmin = cookies['loginToken']

    



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
      <table className={classes.topTable}>
        <tr>
        <Link className={classes.link} to="/details"><td>Austin business</td></Link>
          <td>A small business</td>
          <td>9 - 5</td>
          <td>19467 whatevs road</td>
          {isAdmin && <td><DeleteIcon /></td>}
        </tr>
      </table>

      <table className={classes.topTable}>
        <tr>
        <Link className={classes.link} to="/details"><td>Austin business</td></Link>
          <td>A small business</td>
          <td>9 - 5</td>
          <td>19467 whatevs road</td>
          {isAdmin && <td><DeleteIcon /></td>}
        </tr>
      </table>

      <table>
        <tr>
        <Link className={classes.link} to="/details"><td>Austin business</td></Link>
          <td>A small business</td>
          <td>9 - 5</td>
          <td>19467 whatevs road</td>
          {isAdmin && <td><DeleteIcon /></td>}
        </tr>
      </table>
    </div>
  );
};

export default Listings;
