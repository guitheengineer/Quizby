import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';

import Presentation from '../Presentation';
import { postLogin } from '../../../asyncActions';
import BackgroundContainer from '../../backgroundcontainer';

// import TextFieldModified from "../TextFieldModified";
import TextFieldModifiedPassword from '../../textfields/TextFieldModifiedPassword';
import TextFieldModifiedEmail from '../../textfields/TextFieldModifiedEmail';
import { onSubmitForm, selectFormReducer } from '../../../slices/formSlice';

export default function Login() {
  const dispatch = useDispatch();
  const { loginError, loginState } = useSelector(selectFormReducer);

  function onFormSubmit(e) {
    const email = e.target[0].value;
    const password = e.target[2].value;
    dispatch(
      onSubmitForm({
        email,
        password,
      })
    );
    const regexEmailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmailValidator.test(email) && password.length >= 8) {
      dispatch(
        postLogin({
          email,
          password,
        })
      );
    }
    e.preventDefault();
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Presentation
        mgTop="0rem"
        title="Login"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morboa."
      />
      <BackgroundContainer mgTop="3.2rem" minHeight="35.7rem">
        <form onSubmit={onFormSubmit} className="App__form">
          {loginError && (
            <p className="App__form--loginerror">{loginError.errorDes}</p>
          )}
          <TextFieldModifiedEmail />
          <TextFieldModifiedPassword />
          <button
            className="App__form--button"
            type="submit"
            style={{
              marginTop: '3.5rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span>Login</span>
            <ClipLoader
              loading={loginState === 'loading'}
              size="14px"
              color="white"
              css={`
                margin-left: 5px;
              `}
            />
          </button>
        </form>
        <div className="App__registerAdvice">
          Não tem uma conta?
          <em>Registre-se</em>
        </div>
      </BackgroundContainer>
    </div>
  );
}
