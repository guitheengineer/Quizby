import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from 'react-router-dom';

import Presentation from '../../forms/Presentation';
import { postLogin } from '../../../async-actions';
import BackgroundContainer from '../../backgroundcontainer';
import TextFieldModifiedPassword from '../../textfields/TextFieldModifiedPassword';
import TextFieldModifiedEmail from '../../textfields/TextFieldModifiedEmail';
import { onSubmitForm, selectFormReducer } from '../../../slices/form-slice';

const Login = () => {
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
        desc="Enter to start creating and sharing fun quizzes to your friends!"
      />
      <BackgroundContainer mgTop="3.2rem" minHeight="35.7rem">
        <form onSubmit={onFormSubmit} className="App__form">
          {loginError && (
            <p className="App__form--loginerror">{loginError.errorDes}</p>
          )}
          <TextFieldModifiedEmail />
          <TextFieldModifiedPassword />
          <button className="button" type="submit">
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
          Still not registered?
          <Link to="/signup">
            <em className="App__call">Signup</em>
          </Link>
        </div>
      </BackgroundContainer>
    </div>
  );
};

export default Login;
