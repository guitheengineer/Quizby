import React, { SyntheticEvent } from 'react';
import './sign-container.scss';
import BackgroundContainer from 'components/main/background-container';
import {
  TextFieldModifiedUsername,
  TextFieldModifiedEmail,
  TextFieldModifiedPassword,
} from 'components/common/textfields';
import ButtonForm from 'components/common/button-form';
import { ThunkResponses } from 'types';

type Props = {
  loadingState: ThunkResponses;
  handleSubmit: (e: SyntheticEvent) => any;
};

const SignContainer = ({ handleSubmit, loadingState }: Props) => (
  <BackgroundContainer className="Sign__background-container">
    <form onSubmit={handleSubmit} className="Sign__form Sign__form--signup">
      <TextFieldModifiedUsername />
      <TextFieldModifiedEmail />
      <TextFieldModifiedPassword />
      <ButtonForm
        className="button--signup"
        title="Signup"
        loadingState={loadingState}
      />
    </form>
  </BackgroundContainer>
);

export default SignContainer;
