import React from 'react';
import { TextField, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  setPasswordVisibility,
  selectFormReducer,
} from '../../../slices/form-slice/form-slice';
import { useAppSelector, useAppDispatch } from '../../../store';

const TextFieldModifiedPassword = () => {
  const dispatch = useAppDispatch();
  const { password, errorExistsPassword } = useAppSelector(selectFormReducer);

  return (
    <TextField
      error={errorExistsPassword.errorExists}
      helperText={errorExistsPassword.errorDesc}
      required
      id="password"
      label="Password"
      variant="outlined"
      type={password.visible ? 'text' : 'password'}
      margin="normal"
      FormHelperTextProps={{
        style: {
          fontSize: '12px',
          lineHeight: '1.55',
        },
      }}
      InputProps={{
        endAdornment: (
          <IconButton
            style={{ marginRight: '-.7rem' }}
            aria-label="toggle password visibility"
            onClick={() => dispatch(setPasswordVisibility())}
            edge="end"
          >
            {password.visible ? (
              <Visibility
                style={{
                  fontSize: '23px',
                  color: 'rgba(107, 110, 202, 0.8)',
                }}
              />
            ) : (
              <VisibilityOff
                style={{
                  fontSize: '23px',
                  color: 'rgba(107, 110, 202, 0.8)',
                }}
              />
            )}
          </IconButton>
        ),
      }}
    />
  );
};

export default TextFieldModifiedPassword;
