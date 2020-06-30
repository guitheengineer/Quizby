import React from "react";
import Presentation from "../Presentation";
import { postLogin } from "../../asyncActions/postLogin";
import BackgroundContainer from "../BackgroundContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Presentation
        mgTop={"0rem"}
        title="Login"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morboa."
      />
      <BackgroundContainer mgTop={"3.2rem"}>
        <form
          onSubmit={(e) => {
            dispatch(
              postLogin({
                email: e.target[0].value,
                password: e.target[1].value,
              })
            );
            e.preventDefault();
          }}
          className="App__form"
        >
          <label>
            E-mail
            <input type="email" />
          </label>
          <label style={{ marginTop: "2.8rem" }}>
            Senha
            <input type="password" />
          </label>
          <button type="submit" style={{ marginTop: "3.5rem", width: "100%" }}>
            Login
          </button>
        </form>
        <div className="App__registerAdvice">
          Não tem uma conta? <em>Registre-se</em>
        </div>
      </BackgroundContainer>
    </div>
  );
}

export default Login;
