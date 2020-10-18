import React, { ChangeEvent } from 'react';
import TextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import { changeInput } from 'slices/manipulate-slice';
import { useAppSelector, useAppDispatch } from 'store';
import { Fields } from 'types';

type Props = Omit<OutlinedTextFieldProps, 'variant'> & {
  maxLength?: number;
  index?: number;
  type: Fields;
};

const TextFieldCommon = ({
  label = 'Text',
  required = false,
  style = {},
  multiline = false,
  maxLength = 140,
  type,
  index = 0,
  className,
}: Props) => {
  const dispatch = useAppDispatch();
  const quizValue = useAppSelector((state) => {
    if (
      type === 'question' ||
      type === 'fakeAnswer1' ||
      type === 'fakeAnswer2' ||
      type === 'fakeAnswer3' ||
      type === 'answer'
    ) {
      return state.manipulate.creationQuizzes[index][type];
    }
    return state.manipulate[type];
  });

  const textChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput({ value: e.target.value, type, index }));
  };

  return (
    <TextField
      variant="outlined"
      className={`Quiz-form__name Quiz-form__name--${className}`}
      fullWidth
      label={label}
      onChange={textChange}
      required={required}
      value={quizValue}
      style={style}
      multiline={multiline}
      inputProps={{ maxLength }}
    />
  );
};

export default TextFieldCommon;
