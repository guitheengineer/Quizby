import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SliceState {
  menuIsActive: boolean;
  isLandingMenuActive: boolean;
}

const initialState: SliceState = {
  menuIsActive: false,
  isLandingMenuActive: false,
};

export const generalSlice = createSlice({
  name: 'generalReducer',
  initialState,
  reducers: {
    changeMenu: (
      state,
      {
        payload: { type, isActive },
      }: PayloadAction<{
        type: 'menuIsActive' | 'isLandingMenuActive';
        isActive?: boolean | undefined;
      }>
    ) => {
      if (isActive === undefined) {
        state[type] = !state[type];
      } else {
        state[type] = isActive;
      }
    },
  },
});

export const { changeMenu } = generalSlice.actions;

export default generalSlice.reducer;
