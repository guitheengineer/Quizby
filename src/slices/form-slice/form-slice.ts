import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  checkIfUserExists,
  checkIfEmailExists,
  postLogin,
  postSignup,
} from './async-actions';
import { regexUsernameValidator, regexEmailValidator } from '../../utils/regex';
import { UserResponse } from '../../types';
import { RootState } from '../../store/store';

interface Error {
  errorExists: boolean;
  errorDesc: string | null;
}

export interface SliceState {
  username: string;
  email: string;
  password: {
    value: string;
    visible: boolean;
  };
  errorExistsUsername: Error;
  errorExistsEmail: Error;
  errorExistsPassword: Error;
  loginError: {
    errorExists: boolean;
    errorDesc: string;
  };
  loginState: string;
  signupState: string;
}

const initialState: SliceState = {
  username: '',
  email: '',
  password: {
    value: '',
    visible: false,
  },
  errorExistsUsername: {
    errorExists: false,
    errorDesc: null,
  },
  errorExistsEmail: {
    errorExists: false,
    errorDesc: null,
  },
  errorExistsPassword: {
    errorExists: false,
    errorDesc: null,
  },
  loginError: {
    errorExists: false,
    errorDesc: '',
  },
  loginState: '',
  signupState: '',
};

type CheckUser = { userExists: boolean };
type CheckEmail = { emailExists: boolean };
type Response = {
  status: string;
  message: string;
  token: string;
  user: UserResponse;
};

export const formSlice = createSlice({
  name: 'formReducer',
  initialState,
  reducers: {
    onSubmitForm: (state, action) => {
      const { username, email, password } = action.payload;

      state.username = username;
      state.email = email;
      state.password.value = password;

      if (!regexUsernameValidator.test(state.username)) {
        state.errorExistsUsername = {
          errorExists: true,
          errorDesc:
            'Usernames should have at least 3 digits with no special characters',
        };
      } else {
        state.errorExistsUsername = {
          errorExists: false,
          errorDesc: null,
        };
      }

      if (!regexEmailValidator.test(state.email)) {
        state.errorExistsEmail = {
          errorExists: true,
          errorDesc: 'Please, enter a valid email',
        };
      } else {
        state.errorExistsEmail = {
          errorExists: false,
          errorDesc: null,
        };
      }
      if (state.password.value.length < 8) {
        state.errorExistsPassword = {
          errorExists: true,
          errorDesc: 'Password should be at least 8 characters long',
        };
      } else {
        state.errorExistsPassword = {
          errorExists: false,
          errorDesc: null,
        };
      }
    },
    setPasswordVisibility: (state) => {
      state.password.visible = !state.password.visible;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      checkIfUserExists.fulfilled,
      (state, { payload }: PayloadAction<CheckUser>) => {
        if (payload.userExists) {
          state.errorExistsUsername = {
            errorExists: true,
            errorDesc: 'Username already exists',
          };
        }
      }
    );
    builder.addCase(
      checkIfEmailExists.fulfilled,
      (state, { payload }: PayloadAction<CheckEmail>) => {
        if (payload.emailExists) {
          state.errorExistsEmail = {
            errorExists: true,
            errorDesc: 'Email already exists',
          };
        }
      }
    );
    builder.addCase(postLogin.pending, (state) => {
      state.loginState = 'loading';
    });
    builder.addCase(
      postLogin.fulfilled,
      (state, { payload }: PayloadAction<Response>) => {
        const { status, message, token, user } = payload;
        if (status === 'error') {
          state.loginError = {
            errorExists: true,
            errorDesc: message,
          };
        }
        if (status === 'success') {
          state.loginError = {
            errorExists: false,
            errorDesc: '',
          };
          localStorage.setItem('TOKEN', token);
          localStorage.setItem('USER', user._id);
        }
        state.loginState = 'fulfilled';
      }
    );
    builder.addCase(postLogin.rejected, (state) => {
      state.loginError = {
        errorExists: true,
        errorDesc: 'An error has been ocurred, try again later',
      };
      state.loginState = 'rejected';
    });
    builder.addCase(postSignup.pending, (state) => {
      state.signupState = 'loading';
    });
    builder.addCase(postSignup.fulfilled, (state) => {
      state.signupState = 'fulfilled';
    });
    builder.addCase(postSignup.rejected, (state) => {
      state.signupState = 'rejected';
    });
  },
});

export const { setPasswordVisibility, onSubmitForm } = formSlice.actions;

export const selectFormReducer = (state: RootState) => state.form;

export default formSlice.reducer;
