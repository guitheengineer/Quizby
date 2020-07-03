import React, { useState } from "react";
import Presentation from "../Presentation";
import { postLogin } from "../../asyncActions/postLogin";
import BackgroundContainer from "../BackgroundContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import TextFieldModified from "../TextFieldModified";
import TextFieldModifiedPassword from "../TextFieldModifiedPassword";
import TextFieldModifiedEmail from "../TextFieldModifiedEmail";
import { onSubmitForm } from "../../slices/formSlice";

function Login() {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Presentation
        mgTop={"0rem"}
        title="Login"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morboa."
      />
      <BackgroundContainer mgTop={"3.2rem"} minHeight="35.7rem">
        <form
          onSubmit={(e) => {
            dispatch(onSubmitForm());
            dispatch(
              postLogin({
                email: e.target[0].value,
                password: e.target[2].value,
              })
            );
            e.preventDefault();
          }}
          className="App__form"
        >
          <TextFieldModifiedEmail />
          <TextFieldModifiedPassword />
          <button
            className="App__form--button"
            type="submit"
            style={{ marginTop: "3.5rem", width: "100%" }}
          >
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
