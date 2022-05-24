import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import cookie from "cookie";
import classes from "./BasicTextFields.module.scss";

export default function BasicTextFields() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    document.cookie = `loginToken=true;max-age=60*10000;`;

    dispatch({ type: "FLIPFLAG" });

    return navigate("/", { replace: true });
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField
        id="standard-basic"
        type="password"
        label="Password"
        variant="standard"
      />
      <button className={classes.button} onClick={handleLogin}>
        Login
      </button>
    </Box>
  );
}
