import { createSlice } from '@reduxjs/toolkit';
import { checkIfUserExists } from '../asyncActions';

export const formSlice = createSlice({
  name: 'formReducer',
  initialState: {
    username: {
      value: '',
    },
    email: {
      value: '',
    },
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
  },
  reducers: {
    setFieldValue: (state, action) => {
      const labelLowercase = `${action.payload.label}`.toLowerCase();
      state[labelLowercase].value = action.payload.value;
    },
    onSubmitForm: (state, action) => {
      const regexUsernameValidator = /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
      if (!regexUsernameValidator.test(state.username.value)) {
        state.errorExistsUsername = {
          errorExists: true,
          errorDesc: 'Usernames should have at least 3 digits with no special characters',
        };
      } else {
        state.errorExistsUsername = {
          errorExists: false,
          errorDesc: null,
        };
      }

      const regexEmailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmailValidator.test(state.email.value)) {
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
      if (state.password.value < 8) {
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
    // setOnBlur: (state, action) => {
    //   const labelLowercase = `${action.payload}`.toLowerCase();
    //   state[labelLowercase].blur = "true";
    //   state[labelLowercase].focused = "false";

    //   let regexUsernameValidator = /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

    //   if (
    //     !regexUsernameValidator.test(state.username.value) &&
    //     state.username.blur === "true"
    //   ) {
    //     state.errorExistsUsername = {
    //       errorExists: true,
    //       errorDesc:
    //         "Usernames should have at least 3 digits with no special characters",
    //     };
    //   } else {
    //     state.errorExistsUsername = {
    //       errorExists: false,
    //       errorDesc: null,
    //     };
    //   }

    //   let regexEmailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   if (
    //     !regexEmailValidator.test(state.email.value) &&
    //     state.email.blur === "true"
    //   ) {
    //     state.errorExistsEmail = {
    //       errorExists: true,
    //       errorDesc: "Please, enter a valid email",
    //     };
    //   } else {
    //     state.errorExistsEmail = {
    //       errorExists: false,
    //       errorDesc: null,
    //     };
    //   }
    // },
    setOnFocus: (state, action) => {
      const labelLowercase = `${action.payload}`.toLowerCase();
      state[labelLowercase].blur = 'false';
      state[labelLowercase].focused = 'true';
    },
    setPasswordVisibility: (state, action) => {
      state.password.visible = !state.password.visible;
    },
  },
  extraReducers: {
    [checkIfUserExists.pending]: (state, action) => {},
    [checkIfUserExists.fulfilled]: (state, action) => {
      if (action.payload.userExists) {
        state.errorExistsUsername = {
          errorExists: true,
          errorDesc: 'Username already exists',
        };
      }
    },
    [checkIfUserExists.rejected]: (state, action) => {},
  },
});

export const {
  setOnBlur,
  setOnFocus,
  setFieldValue,
  setPasswordVisibility,
  onSubmitForm,
} = formSlice.actions;

export default formSlice.reducer;
