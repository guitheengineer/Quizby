import React, { useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  setOnBlur,
  setOnFocus,
  setFieldValue,
  setPasswordVisibility,
} from "../slices/formSlice";

export default function TextFieldModifiedPassword({ nameOfVar, nameOfFunc }) {
  const dispatch = useDispatch();
  const data = useSelector((data) => data.formReducer);
  const { password, errorExistsPassword } = data;
  return (
    <TextField
      error={errorExistsPassword.errorExists}
      helperText={errorExistsPassword.errorDesc}
      id="outlined-basic"
      label="Password"
      variant="outlined"
      onChange={(e) => {
        let value = e.target.value;
        dispatch(setFieldValue({ label: "Password", value }));
      }}
      type={password.visible ? "Text" : "Password"}
      margin={"normal"}
      FormHelperTextProps={{
        style: {
          fontSize: "12px",
          lineHeight: "1.55",
        },
      }}
      InputProps={{
        endAdornment: (
          <IconButton
            style={{ marginRight: "-.7rem" }}
            aria-label="toggle password visibility"
            onClick={() => dispatch(setPasswordVisibility())}
            // onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {password.visible ? (
              <Visibility
                style={{
                  fontSize: "23px",
                  color: "rgba(107, 110, 202, 0.8)",
                }}
              />
            ) : (
              <VisibilityOff
                style={{
                  fontSize: "23px",
                  color: "rgba(107, 110, 202, 0.8)",
                }}
              />
            )}
          </IconButton>
        ),
      }}
    />
  );
}
