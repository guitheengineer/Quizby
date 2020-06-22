import React from "react";
import Presentation from "../Presentation";
import { setLogoIsShowing } from "../../slices/rootSlice";
import BackgroundContainer from "../BackgroundContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Signup() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Presentation
        mgTop={"0.5rem"}
        title="Registrar-se"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morboa."
      />
      <BackgroundContainer mgTop="3.5rem">
        <form className="App__form">
          <label>
            Username
            <input type="text" />
          </label>
          <label>
            E-mail
            <input type="email" />
          </label>
          <label>
            Senha
            <input type="password" />
          </label>
          <button type="submit">Registrar</button>
        </form>
      </BackgroundContainer>
    </div>
  );
}

export default Signup;
