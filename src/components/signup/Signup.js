import React from "react";
import Presentation from "../Presentation";
import { setLogoIsShowing } from "../../slices/rootSlice";
import BackgroundContainer from "../BackgroundContainer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postSignup } from "../../asyncActions/postSignup";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Presentation
        mgTop={"0rem"}
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
          <label>
            Username
            <input
              type="text"
              style={{ borderColor: "red" }}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            E-mail
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Senha
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button style={{ marginTop: "2.8rem", width: "100%" }} type="submit">
            Registrar
          </button>
        </form>
      </BackgroundContainer>
    </div>
  );
}

export default Signup;
