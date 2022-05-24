import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import DeleteIcon from "../../../../icons/DeleteIcon";
import cookie from "cookie";
import classes from "./MapTable.module.scss";
const MapTable = ({ name, description, hours, address, index }) => {
  const dispatch = useDispatch();
  const cookies = cookie.parse(document.cookie);

  let isAdmin = cookies["loginToken"];

  const handleDelete = () => {
    dispatch({ type: "REMOVE", payload: index });
  };

  return (
    <table className={classes.topTable}>
      <tr className={classes.row}>
        <td className={classes.itemOne}>
          <Link className={classes.link} to="/details">
            {name}
          </Link>
        </td>

        <td className={classes.itemTwo}>{description}</td>
        <td className={classes.itemOne}>{hours}</td>
        <td className={classes.itemOne}>{address}</td>
        {isAdmin && (
          <td className={classes.deleteIcon} onClick={handleDelete}>
            <DeleteIcon />
          </td>
        )}
      </tr>
    </table>
  );
};

export default MapTable;
