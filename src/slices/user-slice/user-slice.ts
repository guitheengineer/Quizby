import { RootState } from '../../store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { verifyUser, saveQuizResult } from './async-actions';

interface SliceState {
  isAuthenticated: boolean;
  checkAuth: boolean;
  username: string;
  email: string;
  _id: string | null;
  saveQuizFetchState: string;
}

const initialState: SliceState = {
  isAuthenticated: false,
  checkAuth: false,
  username: '',
  email: '',
  _id: '',
  saveQuizFetchState: '',
};

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUser: (state) => {
      state._id = localStorage.getItem('USER');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(verifyUser.pending, (state) => {
      state.checkAuth = false;
    });
    builder.addCase(
      verifyUser.fulfilled,
      (
        state,
        {
          payload,
        }: PayloadAction<{
          user: { username: string; email: string; _id: string };
        }>
      ) => {
        const { username, email, _id } = payload.user;
        state.isAuthenticated = true;
        state.username = username;
        state.email = email;
        state._id = _id;

        state.checkAuth = true;
      }
    );
    builder.addCase(verifyUser.rejected, (state) => {
      state.isAuthenticated = false;
      state.checkAuth = true;
    });
    builder.addCase(saveQuizResult.rejected, (state) => {
      state.saveQuizFetchState = 'rejected';
    });
    builder.addCase(saveQuizResult.fulfilled, (state) => {
      state.saveQuizFetchState = 'fulfilled';
    });
    builder.addCase(saveQuizResult.pending, (state) => {
      state.saveQuizFetchState = 'pending';
    });
  },
});

export const { setUser } = userSlice.actions;

export const selectUserReducer = (state: RootState) => state.user;

export default userSlice.reducer;
