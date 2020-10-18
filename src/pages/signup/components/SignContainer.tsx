import React, { SyntheticEvent } from 'react';
import BackgroundContainer from 'components/main/background-container';
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
  <BackgroundContainer marginTop="2.7rem" minHeight="38.7rem">
    <form onSubmit={handleSubmit} className="Form-page__form">
      <TextFieldModifiedUsername />
      <TextFieldModifiedEmail />
      <TextFieldModifiedPassword />
      <ButtonForm loadingState={loadingState} />
    </form>
  </BackgroundContainer>
);

export default SignContainer;
