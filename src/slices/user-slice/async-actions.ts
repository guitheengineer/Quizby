import { createAsyncThunk } from '@reduxjs/toolkit';
import { postFetch, simpleFetch } from 'utils';
import { ModifyQuiz } from 'types';

const reducer = 'userReducer';

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
