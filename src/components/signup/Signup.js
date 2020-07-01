import React from "react";
import Presentation from "../Presentation";
import { setLogoIsShowing } from "../../slices/rootSlice";
import BackgroundContainer from "../BackgroundContainer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postSignup } from "../../asyncActions/postSignup";
import { TextField, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff, AlternateEmail } from "@material-ui/icons";
import TextFieldModified from "../TextFieldModified";
import TextFieldModifiedPassword from "../TextFieldModifiedPassword";

function Signup() {
  const [username, setUsername] = useState({
    focused: "false",
    blur: "false",
    value: "",
  });
  const [email, setEmail] = useState({
    focused: "false",
    blur: "false",
    value: "",
  });
  const [password, setPassword] = useState({
    focused: "false",
    blur: "false",
    value: "",
  });

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
          <TextFieldModified
            nameOfVar={username}
            nameOfFunc={setUsername}
            label="Username"
          />
          <TextFieldModified
            nameOfVar={email}
            nameOfFunc={setEmail}
            label="E-mail"
          />
          <TextFieldModifiedPassword
            nameOfVar={password}
            nameOfFunc={setPassword}
          />

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
