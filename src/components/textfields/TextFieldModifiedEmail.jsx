import React from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setFieldValue } from '../../slices/formSlice';

export default function TextFieldEmail() {
  const dispatch = useDispatch();
  const data = useSelector((selectorData) => selectorData.formReducer);
  const { errorExistsEmail } = data;

  return (
    <TextField
      error={errorExistsEmail.errorExists}
      helperText={errorExistsEmail.errorDesc}
      id="outlined-basic"
      label="Email"
      variant="outlined"
      onChange={(e) => {
        const { value } = e.target;
        dispatch(setFieldValue({ label: 'Email', value }));
      }}
      type="Email"
      margin="normal"
      FormHelperTextProps={{
        style: {
          fontSize: '12px',
          lineHeight: '1.55',
        },
      }}
    />
  );
}
