import React, { SyntheticEvent, useEffect } from 'react';
import ButtonForm from '../../../components/common/button-form';
import BackgroundContainer from '../../../components/main/background-container';
import {
  TextFieldModifiedEmail,
  TextFieldModifiedPassword,
} from '../../../components/common/textfields';
import { Link, useHistory } from 'react-router-dom';
import {
  onSubmitForm,
  selectFormReducer,
} from '../../../slices/form-slice/form-slice';
import { useAppSelector } from '../../../store';
import { useDispatch } from 'react-redux';
import { regexEmailValidator } from '../../../utils';
import { postLogin } from '../../../slices/form-slice/async-actions';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const { loginError, loginState } = useAppSelector(selectFormReducer);
  const history = useHistory();
  useEffect(() => {
    if (loginState === 'fulfilled' && !loginError.errorExists) {
      history.push('/quizzes');
    }
  }, [loginState, loginError.errorExists, history]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

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
  };
  return (
    <BackgroundContainer className="Sign__background-container">
      <>
        <form onSubmit={handleSubmit} className="Sign__form Sign__form--login">
          {loginError && (
            <p className="Sign__login-error">{loginError.errorDesc}</p>
          )}
          <TextFieldModifiedEmail />
          <TextFieldModifiedPassword />
          <ButtonForm title="Login" loadingState={loginState} />
        </form>
        <div className="Sign__advice">
          Still not registered?
          <Link to="/signup">
            <em className="Sign__call">Signup</em>
          </Link>
        </div>
      </>
    </BackgroundContainer>
  );
};
export default LoginContainer;
