import React from "react";
import Presentation from "../Presentation";
import { setLogoIsShowing } from "../../slices/rootSlice";
import BackgroundContainer from "../BackgroundContainer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postSignup } from "../../asyncActions/postSignup";
import { TextField, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

function Signup() {
  const [username, setUsername] = useState({ blur: "false", value: "" });
  const [email, setEmail] = useState({ blur: "false", value: "" });
  const [password, setPassword] = useState({ blur: "false", value: "" });
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Presentation
        mgTop={"-1.1rem"}
        title="Registrar-se"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morboa."
      />
      <BackgroundContainer mgTop="2.7rem" minHeight="38.7rem">
        <form
          onSubmit={(e) => {
            dispatch(
              postSignup({
                username: e.target[0].value,
                email: e.target[1].value,
                password: e.target[2].value,
              })
            );
            e.preventDefault();
          }}
          className="App__form"
        >
          <TextField
            error
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={showPassword ? "Text" : "Password"}
            InputProps={{
              endAdornment: (
                <IconButton
                  style={{ marginRight: "1rem" }}
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <Visibility style={{ fontSize: "23px" }} />
                  ) : (
                    <VisibilityOff style={{ fontSize: "23px" }} />
                  )}
                </IconButton>
              ),
            }}
          />
          {/* <label>
            Username
            <input
              type="text"
              value={username.value}
              style={{
                borderColor:
                  username.blur === "true" && username.value === "" && "red",
              }}
              onBlur={() => {
                setUsername((prevState) => ({ ...prevState, blur: "true" }));
              }}
              onChange={(e) => {
                let tv = e.target.value;
                setUsername((prevState) => ({
                  ...prevState,
                  value: tv,
                }));
              }}
            />
          </label>
          <label>
            E-mail
            <input
              type="email"
              style={{
                borderColor:
                  email.blur === "true" && email.value === "" && "red",
              }}
              onBlur={() => {
                setEmail((prevState) => ({ ...prevState, blur: "true" }));
              }}
              onChange={(e) => {
                let tv = e.target.value;
                setEmail((prevState) => ({
                  ...prevState,
                  value: tv,
                }));
              }}
            />
          </label> */}
          {/* <label>
            Senha
            <input
              type="password"
              style={{
                borderColor:
                  password.blur === "true" && password.value === "" && "red",
              }}
              onBlur={() => {
                setPassword((prevState) => ({ ...prevState, blur: "true" }));
              }}
              onChange={(e) => {
                let tv = e.target.value;
                setPassword((prevState) => ({
                  ...prevState,
                  value: tv,
                }));
              }}
            />
          </label> */}
          <button
            className="App__form--button"
            style={{ marginTop: "2.8rem", width: "100%" }}
            type="submit"
          >
            Registrar
          </button>
        </form>
      </BackgroundContainer>
    </div>
  );
}

export default Signup;
