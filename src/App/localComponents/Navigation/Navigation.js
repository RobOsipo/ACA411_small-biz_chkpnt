import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import cookie from "cookie";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  const cookies = cookie.parse(document.cookie);
  let isAdmin = cookies["loginToken"];

  const loginFlag = useSelector((state) => state.loginIdentifier);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("isadmin", isAdmin);
  }, [loginFlag, isAdmin]);

  const handleLogout = () => {
    document.cookie =
      "loginToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    dispatch({ type: "FLIPFLAG" });
  };

  const conditionalLinks = () => {
    if (isAdmin) {
      return (
        <>
          <Link className={classes.link} to="/add">
            Add
          </Link>
          <button className={classes.button} onClick={handleLogout}>
            Logout
          </button>
        </>
      );
    } else {
      return (
        <Link className={classes.link} to="/login">
          Login
        </Link>
      );
    }
  };

  return (
    <header className={classes.header}>
      <Link className={classes.link} to="/">
        <h1 className={classes.title}>Austin Small Business</h1>
      </Link>
      <div className={classes["link-container"]}>
        <Link className={classes.link} to="/">
          Listings
        </Link>
        {conditionalLinks()}
      </div>
    </header>
  );
};

export default Navigation;
