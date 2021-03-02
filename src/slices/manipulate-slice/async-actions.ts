import { createAsyncThunk } from '@reduxjs/toolkit';
import { simpleFetch, postFetch } from 'utils';
import { QuizData, QuizForm } from 'types';

const reducer = 'manipulateReducer';

export const sendForm = createAsyncThunk(
  `${reducer}/sendForm`,
  async (quizData: QuizForm) => postFetch('user/:id/createquiz', quizData)
);

export const getQuizEdit = createAsyncThunk(
  `${reducer}/getQuizEdit`,
  async (id: string) => simpleFetch(`quizzes/quiz/${id}`)
);

export const editQuizThunk = createAsyncThunk(
  `${reducer}/editQuizThunk`,
  async (quizData: QuizData) =>
    postFetch(`user/${quizData.username}/editquiz`, quizData)
);
