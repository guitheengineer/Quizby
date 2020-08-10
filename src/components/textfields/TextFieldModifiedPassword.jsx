import React from 'react';
import { TextField, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPasswordVisibility,
  selectFormReducer,
} from '../../slices/formSlice';

export default function TextFieldModifiedPassword() {
  const dispatch = useDispatch();
  const { password, errorExistsPassword } = useSelector(selectFormReducer);

  return (
    <TextField
      error={errorExistsPassword.errorExists}
      helperText={errorExistsPassword.errorDesc}
      id="outlined-basic"
      label="Password"
      variant="outlined"
      type={password.visible ? 'Text' : 'Password'}
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
            // onMouseDown={handleMouseDownPassword}
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
}
