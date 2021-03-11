import { createSlice } from '@reduxjs/toolkit';
import { ThunkResponses } from 'types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { postFetch, simpleFetch } from './fetch-utils';
import { ModifyQuiz } from 'types';

const reducer = 'userReducer';
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

export const saveQuizResult = createAsyncThunk(
  `${reducer}/savequiz`,
  async ({
    percentage,
    quizId,
    username,
  }: Pick<ModifyQuiz, 'percentage' | 'quizId' | 'username'>) =>
    postFetch(`user/${username}/savequiz`, { percentage, quizId })
);

export const verifyUser = createAsyncThunk(`${reducer}/verifyUser`, async () =>
  simpleFetch('verifyuser')
);

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUser: (state) => {
      state._id = localStorage.getItem('USER');
    },
    resetUser: (state) => {
      state.isAuthenticated = null;
      state.username = '';
      state.email = '';
      state._id = '';
      state.saveQuizFetchState = null;
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

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
