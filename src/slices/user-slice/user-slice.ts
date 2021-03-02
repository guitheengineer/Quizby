import { RootState } from 'store/rootReducer';
import { createSlice } from '@reduxjs/toolkit';
import { verifyUser, saveQuizResult } from './async-actions';
import { ThunkResponses } from 'types';

interface SliceState {
  isAuthenticated: boolean | null;
  username: string;
  email: string;
  _id: string | null;
  saveQuizFetchState: ThunkResponses;
}

const initialState: SliceState = {
  isAuthenticated: null,
  username: '',
  email: '',
  _id: '',
  saveQuizFetchState: null,
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
    builder.addCase(
      verifyUser.fulfilled,
      (
        state,
        {
          payload: {
            status,
            response: { _id, email, username },
          },
        }
      ) => {
        if (status === 'success') {
          state._id = _id;
          state.email = email;
          state.username = username;
          state.isAuthenticated = true;
        }
      }
    );
    builder.addCase(verifyUser.rejected, (state) => {
      state.isAuthenticated = false;
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
