import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { selectFormReducer } from '../../slices/formSlice';

const TextFieldModifiedUsername = () => {
  const { errorExistsUsername, usernameExists } = useSelector(
    selectFormReducer
  );

  return (
    <TextField
      error={errorExistsUsername.errorExists || usernameExists}
      helperText={errorExistsUsername.errorDesc}
      id="outlined-basic"
      label="Username"
      variant="outlined"
      type="Username"
      margin="normal"
      required
      FormHelperTextProps={{
        style: {
          fontSize: '12px',
          lineHeight: '1.55',
        },
      }}
    />
  );
};

export default TextFieldModifiedUsername;
