import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { changeInput } from '../../slices/manipulateSlice';

export default function TextFieldCommon({
  label,
  required,
  style,
  multiline,
  maxLength,
  type,
  id,
  select,
  currencies,
}) {
  const dispatch = useDispatch();
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
      select={select}
      multiline={multiline}
      inputProps={{ maxLength }}
    >
      {select &&
        currencies.map((option) => (
          <MenuItem key={option.value} value={option.value || ''}>
            {option.value}
          </MenuItem>
        ))}
    </TextField>
  );
}

TextFieldCommon.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  style: PropTypes.object,
  maxLength: PropTypes.number,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  select: PropTypes.bool,
  currencies: PropTypes.array,
};
TextFieldCommon.defaultProps = {
  label: 'Text',
  required: false,
  multiline: false,
  maxLength: 140,
  style: {},
  select: false,
  currencies: [],
  id: '',
};
