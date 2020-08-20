import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import Presentation from '../Presentation';
import BackgroundContainer from '../../backgroundcontainer';
import {
  postSignup,
  checkIfUserExists,
  checkIfEmailExists,
} from '../../../asyncActions';
import TextFieldModifiedUsername from '../../textfields/TextFieldModifiedUsername';
import TextFieldModifiedPassword from '../../textfields/TextFieldModifiedPassword';
import TextFieldModifiedEmail from '../../textfields/TextFieldModifiedEmail';
import { onSubmitForm } from '../../../slices/formSlice';

function Signup() {
  const dispatch = useDispatch();
  const signupState = useSelector((data) => data.formReducer.signupState);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Presentation
        mgTop="-1.1rem"
        title="Signup"
        desc="Register now and start playing quizzes from the community"
      />
      <BackgroundContainer mgTop="2.7rem" minHeight="38.7rem">
        <form
          onSubmit={(e) => {
            const username = e.target[0].value;
            const email = e.target[2].value;
            const password = e.target[4].value;
            dispatch(
              onSubmitForm({
                username,
                email,
                password,
              })
            );
            dispatch(checkIfUserExists(username));
            dispatch(checkIfEmailExists(email));
            const regexEmailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const regexUsernameValidator = /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
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
            e.preventDefault();
          }}
          className="App__form"
        >
          <TextFieldModifiedUsername />
          <TextFieldModifiedEmail />
          <TextFieldModifiedPassword />
          <button
            className="App__form--button"
            style={{
              marginTop: '2.8rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            type="submit"
          >
            <span>Signup</span>
            <ClipLoader
              loading={signupState === 'loading'}
              size="14px"
              color="white"
              css={`
                margin-left: 5px;
              `}
            />
          </button>
        </form>
      </BackgroundContainer>
    </div>
  );
}

export default Signup;
