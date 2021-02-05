import React, { SyntheticEvent } from 'react';
import './sign-container.scss';
import BackgroundContainer from '../../../components/main/background-container';
import {
  TextFieldModifiedUsername,
  TextFieldModifiedEmail,
  TextFieldModifiedPassword,
} from '../../../components/common/textfields';
import ButtonForm from '../../../components/common/button-form';

type Props = {
  loadingState: string;
  handleSubmit: (e: SyntheticEvent) => any;
};

const SignContainer = ({ handleSubmit, loadingState }: Props) => (
  <BackgroundContainer width="100vw" marginTop="2.7rem" minHeight="33rem">
    <form onSubmit={handleSubmit} className="Sign__form">
      <TextFieldModifiedUsername />
      <TextFieldModifiedEmail />
      <TextFieldModifiedPassword />
      <ButtonForm title="Signup" loadingState={loadingState} />
    </form>
  </BackgroundContainer>
);

export default SignContainer;
