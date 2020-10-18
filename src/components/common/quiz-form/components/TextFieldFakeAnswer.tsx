import React from 'react';
import { Fields } from 'types';
import TextFieldCommon from './TextFieldCommon';

type Props = {
  number: number;
  index: number;
};

const TextFieldFakeAnswer = ({ number, index }: Props) => (
  <TextFieldCommon
    type={`fakeAnswer${number}` as Fields}
    label={`Fake Answer ${number}`}
    multiline
    required
    maxLength={20}
    className="create"
    index={index}
  />
);

export default TextFieldFakeAnswer;
