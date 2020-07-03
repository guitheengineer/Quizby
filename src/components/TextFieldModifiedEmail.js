import React from "react";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { checkIfUserExists } from "../asyncActions/checkIfUserExists";
import { setOnBlur, setOnFocus, setFieldValue } from "../slices/formSlice";

export default function TextFieldEmail() {
  const dispatch = useDispatch();
  const data = useSelector((data) => data.formReducer);
  const { errorExistsEmail } = data;

  return (
    <TextField
      error={errorExistsEmail.errorExists}
      helperText={errorExistsEmail.errorDesc}
      onBlur={(e) => {
        console.log(errorExistsEmail.errorExists);
        dispatch(setOnBlur("Email"));
      }}
      id="outlined-basic"
      label="Email"
      variant="outlined"
      onChange={(e) => {
        let value = e.target.value;
        dispatch(setFieldValue({ label: "Email", value }));
      }}
      onFocus={() => {
        dispatch(setOnFocus("Email"));
      }}
      type="Email"
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
