const { createSlice } = require('@reduxjs/toolkit');
const { verifyUser, saveQuizResult } = require('../asyncActions');

export const userSlice = createSlice({
  name: 'userReducer',
  initialState: {
    isAuthenticated: '',
    checkAuth: false,
    username: '',
    email: '',
    id: '',
    saveQuizFetchState: '',
  },
  reducers: {
    setUser: (state) => {
      state.id = localStorage.getItem('USER');
    },
  },
  extraReducers: {
    [verifyUser.pending]: (state) => {
      state.checkAuth = false;
    },
    [verifyUser.fulfilled]: (state, action) => {
      const { username, email, _id } = action.payload.user;
      if (action.payload.status === 'success') {
        state.isAuthenticated = true;
        state.username = username;
        state.email = email;
        state.id = _id;
      } else {
        state.isAuthenticated = false;
      }
      state.checkAuth = true;
    },
    [verifyUser.rejected]: (state) => {
      state.isAuthenticated = false;
      state.checkAuth = true;
    },
    [saveQuizResult.rejected]: (state) => {
      state.saveQuizFetchState = 'error';
    },
    [saveQuizResult.fulfilled]: (state) => {
      state.saveQuizFetchState = 'fulfilled';
    },
    [saveQuizResult.pending]: (state) => {
      state.saveQuizFetchState = 'pending';
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUserReducer = (state) => state.userReducer;

export default userSlice.reducer;
