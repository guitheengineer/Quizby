import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useAppSelector } from 'store';
import { selectFormReducer } from 'slices/form-slice/form-slice';

const TextFieldModifiedUsername = () => {
  const { errorExistsUsername } = useAppSelector(selectFormReducer);

  return (
    <TextField
      error={errorExistsUsername.errorExists}
      helperText={errorExistsUsername.errorDesc}
      label="Username"
      variant="outlined"
      type="username"
      id="username"
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
