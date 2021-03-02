import React from 'react';
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
  style = { marginTop: 20 },
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

  return (
    <TextField
      variant="outlined"
      className={`Quiz-form__name Quiz-form__name--${className}`}
      fullWidth
      label={label}
      onChange={(e) =>
        dispatch(changeInput({ value: e.target.value, type, index }))
      }
      required={required}
      value={quizValue}
      style={type === 'question' ? undefined : style}
      multiline={multiline}
      inputProps={{ maxLength }}
    />
  );
};

export default TextFieldCommon;
