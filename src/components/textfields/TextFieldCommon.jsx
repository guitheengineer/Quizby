import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInput,
  selectManipulateReducer,
} from '../../slices/manipulateSlice';

export default function TextFieldCommon({
  label,
  required,
  style,
  multiline,
  maxLength,
  type,
  id,
}) {
  const dispatch = useDispatch();
  console.log(useSelector(selectManipulateReducer));
  function textChange(e) {
    dispatch(changeInput({ value: e.target.value, type, id }));
  }

  return (
    <TextField
      variant="outlined"
      className="Create-quiz__name"
      fullWidth
      label={label}
      onChange={textChange}
      required={required}
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
};
TextFieldCommon.defaultProps = {
  label: 'Text',
  required: false,
  multiline: false,
  maxLength: 140,
  style: {},
};
