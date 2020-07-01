import React from "react";
import { TextField } from "@material-ui/core";
export function setOnBlur(func) {
  func((prevState) => ({
    ...prevState,
    blur: "true",
  }));
}
export function setOnFocus(func) {
  func((prevState) => ({
    ...prevState,
    focused: true,
  }));
}
export function setOnUnfocus(func) {
  func((prevState) => ({
    ...prevState,
    focused: false,
  }));
}
export function setFieldValue(func, value) {
  func((prevState) => ({
    ...prevState,
    value,
  }));
}
export default function TextFieldModified({ nameOfVar, nameOfFunc, label }) {
  return (
    <TextField
      error={nameOfVar.blur === "true" && nameOfVar.value === "" && true}
      onBlur={() => {
        setOnBlur(nameOfFunc);
        setOnUnfocus(nameOfFunc);
      }}
      id="outlined-basic"
      label={`${label}`}
      variant="outlined"
      onChange={(e) => {
        const value = e.target.value;
        setFieldValue(nameOfFunc, value);
      }}
      helperText={
        nameOfVar.blur === "true" &&
        nameOfVar.value === "" &&
        `Please, insert an ${label}`
      }
      onFocus={() => {
        console.log("foco");
        setOnFocus(nameOfFunc);
      }}
      margin={"normal"}
      FormHelperTextProps={{
        style: {
          fontSize: "12px",
        },
      }}
    />
  );
}
