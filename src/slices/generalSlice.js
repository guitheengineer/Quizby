import { createSlice } from '@reduxjs/toolkit';

export const generalSlice = createSlice({
  name: 'generalReducer',
  initialState: {
    menuIsActive: false,
  },
  reducers: {
    changeMenu: (state, action) => {
      if (!action.payload) state.menuIsActive = !state.menuIsActive;
      else state.menuIsActive = action.payload;
    },
  },
});

export const { changeMenu } = generalSlice.actions;

export default generalSlice.reducer;
