import React from "react";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { checkIfUserExists } from "../asyncActions/checkIfUserExists";
import { setOnBlur, setOnFocus, setFieldValue } from "../slices/formSlice";

export default function TextFieldUsername() {
  const dispatch = useDispatch();
  const data = useSelector((data) => data.formReducer);
  const { errorExistsUsername, usernameExists } = data;

  return (
    <TextField
      error={errorExistsUsername.errorExists || usernameExists}
      helperText={errorExistsUsername.errorDesc}
      onBlur={(e) => {
        const value = e.target.value;

        dispatch(checkIfUserExists(value));
        console.log(errorExistsUsername.errorExists);
        dispatch(setOnBlur("Username"));
      }}
      id="outlined-basic"
      label="Username"
      variant="outlined"
      onChange={(e) => {
        let value = e.target.value;
        dispatch(setFieldValue({ label: "Username", value }));
      }}
      onFocus={() => {
        dispatch(setOnFocus("Username"));
      }}
      type="Username"
      margin={"normal"}
      FormHelperTextProps={{
        style: {
          fontSize: "12px",
          lineHeight: "1.55",
        },
      }}
    />
  );
}
