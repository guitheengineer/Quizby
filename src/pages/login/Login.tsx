import React, { SyntheticEvent } from 'react';
import {
  onSubmitForm,
  selectFormReducer,
} from '../../slices/form-slice/form-slice';
import { useAppSelector, useAppDispatch } from '../../store';
import { regexEmailValidator } from '../../utils';
import { postLogin } from '../../slices/form-slice/async-actions';
import Presentation from '../../components/common/presentation';
import LoginContainer from './components/LoginContainer';

const Login = () => (
  <div className="Sign__container">
    <Presentation
      marginTop="3.4rem"
      title="Login"
      description="Enter to start creating and sharing fun quizzes to your friends!"
    />
    <LoginContainer />
  </div>
);

export default Login;
