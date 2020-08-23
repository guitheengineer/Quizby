import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput } from '../../slices/manipulateSlice';

export default function TextFieldCommon({
  label,
  required,
  style,
  multiline,
  maxLength,
  type,
  index,
}) {
  const quizValue = useSelector((state) => {
    if (
      type === 'question' ||
      type === 'fakeAnswer1' ||
      type === 'fakeAnswer2' ||
      type === 'fakeAnswer3' ||
      type === 'answer'
    ) {
      return state.manipulateReducer.creationQuizzes[index][type];
    }
    return state.manipulateReducer[type];
  });

  const dispatch = useDispatch();
  function textChange(e) {
    dispatch(changeInput({ value: e.target.value, type, index }));
  }

  return (
    <TextField
      variant="outlined"
      className="Quiz-form__name"
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
}

TextFieldCommon.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  style: PropTypes.object,
  maxLength: PropTypes.number,
  type: PropTypes.string.isRequired,
  index: PropTypes.number,
};
TextFieldCommon.defaultProps = {
  label: 'Text',
  required: false,
  multiline: false,
  maxLength: 140,
  style: {},
  index: 0,
};
