const { createSlice } = require('@reduxjs/toolkit');
const { verifyUser } = require('../asyncActions');

export const userSlice = createSlice({
  name: 'userReducer',
  initialState: {
    isAuthenticated: true,
    username: '',
    email: '',
  },
  reducers: {},
  extraReducers: {
    [verifyUser.fulfilled]: (state, action) => {
      const { username, email } = action.payload.user;
      if (action.payload.status === 'success') {
        state.isAuthenticated = true;
        state.username = username;
        state.email = email;
      } else {
        state.isAuthenticated = false;
      }
    },
  },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
