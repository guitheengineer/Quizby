import { createSlice } from '@reduxjs/toolkit';
import {
  checkIfUserExists,
  checkIfEmailExists,
  postLogin,
  postSignup,
} from '../asyncActions';

export const formSlice = createSlice({
  name: 'formReducer',
  initialState: {
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
      errorDes: null,
    },
    loginState: '',
    signupState: '',
  },
  reducers: {
    onSubmitForm: (state, action) => {
      const { username, email, password } = action.payload;

      state.username = username;
      state.email = email;
      state.password.value = password;

      const regexUsernameValidator = /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

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

      const regexEmailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
  extraReducers: {
    [checkIfUserExists.fulfilled]: (state, action) => {
      if (action.payload.userExists) {
        state.errorExistsUsername = {
          errorExists: true,
          errorDesc: 'Username already exists',
        };
      }
    },
    [checkIfEmailExists.fulfilled]: (state, action) => {
      if (action.payload.emailExists) {
        state.errorExistsEmail = {
          errorExists: true,
          errorDesc: 'Email already exists',
        };
      }
    },
    [postLogin.pending]: (state) => {
      state.loginState = 'loading';
    },
    [postLogin.fulfilled]: (state, action) => {
      const { status, message, token, user } = action.payload;
      if (status === 'error') {
        state.loginError = {
          errorExists: true,
          errorDes: message,
        };
      }
      if (status === 'success') {
        state.loginError = {
          errorExists: false,
          errorDes: null,
        };
        localStorage.setItem('TOKEN', token);
        localStorage.setItem('USER', user._id);
      }
      state.loginState = 'fulfilled';
    },
    [postLogin.rejected]: (state) => {
      state.loginError = {
        errorExists: true,
        errorDes: 'An error has been ocurred, try again later',
      };
      state.loginState = 'rejected';
    },
    [postSignup.pending]: (state) => {
      state.signupState = 'loading';
    },
    [postSignup.fulfilled]: (state) => {
      state.signupState = 'fulfilled';
    },
    [postSignup.rejected]: (state) => {
      state.signupState = 'rejected';
    },
  },
});

export const {
  setFieldValue,
  setPasswordVisibility,
  onSubmitForm,
} = formSlice.actions;

export const selectFormReducer = (state) => state.formReducer;

export default formSlice.reducer;
