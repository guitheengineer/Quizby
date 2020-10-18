import React, { SyntheticEvent } from 'react';
import ButtonForm from 'components/common/button-form';
import BackgroundContainer from 'components/main/background-container';
import {
  TextFieldModifiedEmail,
  TextFieldModifiedPassword,
} from 'components/common/textfields';
import { Link } from 'react-router-dom';

type Props = {
  loginState: string;
  handleSubmit: (e: SyntheticEvent) => any;
  loginError: {
    errorExists: boolean;
    errorDesc: string;
  };
};

const LoginContainer = ({ loginState, handleSubmit, loginError }: Props) => (
  <BackgroundContainer marginTop="3.2rem" minHeight="35.7rem">
    <>
      <form onSubmit={handleSubmit} className="Form-page__form">
        {loginError && (
          <p className="Form__login-error">{loginError.errorDesc}</p>
        )}
        <TextFieldModifiedEmail />
        <TextFieldModifiedPassword />
        <ButtonForm title="Login" loadingState={loginState} />
      </form>
      <div className="App__registerAdvice">
        Still not registered?
        <Link to="/signup">
          <em className="App__call">Signup</em>
        </Link>
      </div>
    </>
  </BackgroundContainer>
);

export default LoginContainer;
