import React, { SyntheticEvent, useEffect } from 'react';
import { onSubmitForm, selectFormReducer } from 'slices/form-slice/form-slice';
import { useAppSelector, useAppDispatch } from 'store';
import {
  postSignup,
  checkIfUserExists,
  checkIfEmailExists,
} from 'slices/form-slice/async-actions';
import SignContainer from 'pages/signup/components';
import { regexUsernameValidator, regexEmailValidator } from 'utils/regex';
import Presentation from 'components/common/presentation/Presentation';
import './components/sign-container.scss';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const dispatch = useAppDispatch();
  const { signupState } = useAppSelector(selectFormReducer);
  const history = useHistory();

  useEffect(() => {
    if (signupState === 'fulfilled') {
      history.push('/quizzes');
    }
  }, [signupState, history]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      username: { value: string };
      email: { value: string };
      password: { value: string };
    };

    const username = target.username.value;
    const email = target.email.value;
    const password = target.password.value;

    dispatch(
      onSubmitForm({
        username,
        email,
        password,
      })
    );

    dispatch(checkIfUserExists(username));
    dispatch(checkIfEmailExists(email));

    if (
      regexUsernameValidator.test(username) &&
      regexEmailValidator.test(email) &&
      password.length >= 8
    ) {
      dispatch(
        postSignup({
          username,
          email,
          password,
        })
      );
    }
  };

  return (
    <div className="Sign__container">
      <Presentation
        title="Signup"
        description="Register now and start playing quizzes from the community"
      />
      <SignContainer loadingState={signupState} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Signup;
