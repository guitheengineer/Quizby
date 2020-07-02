import React, { useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { setOnBlur, setFieldValue } from "./TextFieldModified";

export default function TextFieldModifiedPassword({ nameOfVar, nameOfFunc }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextField
      helperText={
        nameOfVar.blur === "true" &&
        nameOfVar.value.length < 8 &&
        "Please, insert a password with at least 8 characters"
      }
      error={nameOfVar.blur === "true" && nameOfVar.value.length < 8 && true}
      id="outlined-basic"
      label="Password"
      variant="outlined"
      onBlur={() => setOnBlur(nameOfFunc)}
      onChange={(e) => {
        const value = e.target.value;
        setFieldValue(nameOfFunc, value);
      }}
      type={showPassword ? "Text" : "Password"}
      margin={"normal"}
      FormHelperTextProps={{
        style: {
          fontSize: "12px",
        },
      }}
      InputProps={{
        endAdornment: (
          <IconButton
            style={{ marginRight: "-.7rem" }}
            aria-label="toggle password visibility"
            onClick={() => setShowPassword((prevState) => !prevState)}
            // onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? (
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
