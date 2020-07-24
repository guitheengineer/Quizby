import React from 'react';
import { useDispatch } from 'react-redux';
import Presentation from '../Presentation';
import BackgroundContainer from '../../backgroundcontainer';
import { postSignup, checkIfUserExists } from '../../../asyncActions';
import TextFieldModifiedUsername from '../../textfields/TextFieldModifiedUsername';
import TextFieldModifiedPassword from '../../textfields/TextFieldModifiedPassword';
import TextFieldModifiedEmail from '../../textfields/TextFieldModifiedEmail';
import { onSubmitForm } from '../../../slices/formSlice';

function Signup() {
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Presentation
        mgTop="-1.1rem"
        title="Registrar-se"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morboa."
      />
      <BackgroundContainer mgTop="2.7rem" minHeight="38.7rem">
        <form
          onSubmit={(e) => {
            console.log(
              e.target[0].value,
              e.target[2].value,
              e.target[4].value
            );
            dispatch(onSubmitForm());
            dispatch(checkIfUserExists(e.target[0].value));
            dispatch(
              postSignup({
                username: e.target[0].value,
                email: e.target[2].value,
                password: e.target[4].value,
              })
            );
            e.preventDefault();
          }}
          className="App__form"
        >
          <TextFieldModifiedUsername />
          <TextFieldModifiedEmail />
          <TextFieldModifiedPassword />
          <button
            // disabled={
            //   errorExistsEmail.errorExists ||
            //   errorExistsUsername.errorExists ||
            //   password.value.length < 8
            // }
            className="App__form--button"
            style={{ marginTop: '2.8rem', width: '100%' }}
            type="submit"
          >
            Registrar
          </button>
        </form>
      </BackgroundContainer>
    </div>
  );
}

export default Signup;
