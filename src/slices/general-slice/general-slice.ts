import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface SliceState {
  menuIsActive: boolean;
}

const initialState: SliceState = {
  menuIsActive: false,
};

export const generalSlice = createSlice({
  name: 'generalReducer',
  initialState,
  reducers: {
    changeMenu: (state, { payload }: PayloadAction<boolean | undefined>) => {
      if (payload === undefined) {
        state.menuIsActive = !state.menuIsActive;
      } else {
        state.menuIsActive = payload;
      }
    },
  },
});

export const { changeMenu } = generalSlice.actions;

export const selectMenuIsActive = (state: RootState) =>
  state.general.menuIsActive;

export const selectGeneralReducer = (state: RootState) => state.general;

export default generalSlice.reducer;
