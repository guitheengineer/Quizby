const { createSlice } = require('@reduxjs/toolkit');
const { verifyUser } = require('../asyncActions');

export const userSlice = createSlice({
  name: 'userReducer',
  initialState: {
    isAuthenticated: '',
    checkAuth: false,
    username: '',
    email: '',
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: {
    [verifyUser.pending]: (state) => {
      state.checkAuth = false;
    },
    [verifyUser.fulfilled]: (state, action) => {
      const { username, email } = action.payload.user;
      console.log(action.payload);
      if (action.payload.status === 'success') {
        state.isAuthenticated = true;
        state.username = username;
        state.email = email;
      } else {
        state.isAuthenticated = false;
      }
      state.checkAuth = true;
    },
    [verifyUser.rejected]: (state) => {
      state.isAuthenticated = false;
      state.checkAuth = true;
    },
  },
});

export default userSlice.reducer;
