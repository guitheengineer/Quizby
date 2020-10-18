import { createAsyncThunk } from '@reduxjs/toolkit';
import { postFetch, simpleFetch } from 'utils';
import { ModifyQuiz } from '../../types';

const reducer = 'quizzesReducer';

export const quizzesAdded = createAsyncThunk(
  `${reducer}/quizzesAdded`,
  async () => simpleFetch(`quizzes`)
);

export const getQuizzes = createAsyncThunk(
  `${reducer}/getQuizzes`,
  async (quizId: string) => postFetch('quizzes', quizId)
);

export const searchQuizzes = createAsyncThunk(
  `${reducer}/searchQuizzes`,
  async (name: string) => simpleFetch(`quizzes/search?q=${name}`)
);

export const getCurrentQuiz = createAsyncThunk(
  `${reducer}/getCurrentQuiz`,
  async (id: string) => simpleFetch(`quizzes/quiz/${id}`)
);

export const getUserQuizzes = createAsyncThunk(
  `${reducer}/getUserQuizzes`,
  async (username: string) => simpleFetch(`user/${username}`)
);

export const getCategoryQuiz = createAsyncThunk(
  `${reducer}/getCategoryQuiz`,
  async (category: string) => simpleFetch(`quizzes/category/${category}`)
);

export const deleteQuiz = createAsyncThunk(
  `${reducer}/deleteQuiz`,
  async ({ quizId, username }: Pick<ModifyQuiz, 'quizId' | 'username'>) =>
    postFetch(`user/${username}/deletequiz`, { quizId })
);
