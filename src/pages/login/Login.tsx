import React, { SyntheticEvent } from 'react';
import { onSubmitForm, selectFormReducer } from 'slices/form-slice/form-slice';
import { useAppSelector, useAppDispatch } from 'store';
import { regexEmailValidator } from 'utils';
import { postLogin } from 'slices/form-slice/async-actions';
import Presentation from 'components/common/presentation';
import LoginContainer from './components/LoginContainer';

const Login = () => {
  const dispatch = useAppDispatch();
  const { loginError, loginState } = useAppSelector(selectFormReducer);

  const handleSubmit = (e: SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: {
        value: string;
      };
    };
    const email = target.email.value;
    const password = target.password.value;
    dispatch(
      onSubmitForm({
        email,
        password,
      })
    );
    if (regexEmailValidator.test(email) && password.length >= 8) {
      dispatch(postLogin({ email, password }));
    }
    e.preventDefault();
  };

  return (
    <div className="Form__container">
      <Presentation
        marginTop="0rem"
        title="Login"
        description="Enter to start creating and sharing fun quizzes to your friends!"
      />
      <LoginContainer
        loginState={loginState}
        loginError={loginError}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
