import { createAsyncThunk } from '@reduxjs/toolkit';

export const checkIfUserExists = createAsyncThunk(
  'formReducer/checkIfUserExists',
  async (value) => {
    try {
      const response = await fetch('/api/userexists', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: value }),
      });
      return await response.json();
    } catch (err) {
      return err;
    }
  }
);

export const getQuizzes = createAsyncThunk(
  'quizzesReducer/getQuizzes',
  async (quizId) => {
    const response = await fetch('/api/quizzes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quizId),
    });
    const data = await response.json();
    return data;
  }
);

export const searchQuizzes = createAsyncThunk(
  'quizzesReducer/searchQuizzes',
  async (name) => {
    const response = await fetch(`/api/quizzes/search?q=${name}`);
    const data = await response.json();
    return data;
  }
);

export const getCurrentQuiz = createAsyncThunk(
  'quizzesReducer/getCurrentQuiz',
  async (id) => {
    const response = await fetch(`/api/quizzes/quiz/${id}`);
    const data = await response.json();
    return data;
  }
);

export const getRecommendedQuiz = createAsyncThunk(
  'quizzesReducer/getRecommendedQuiz',
  async () => {
    const response = await fetch(`/api/quizzes/recommended`);
    const data = await response.json();
    return data;
  }
);

export const postLogin = createAsyncThunk(
  'formReducer/postLogin',
  async ({ email, password }) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  }
);

export const postSignup = createAsyncThunk(
  'formReducer/postSignup',
  async ({ username, email, password }) => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    return data;
  }
);

export const checkIfEmailExists = createAsyncThunk(
  'formReducer/checkIfEmailExists',
  async (email) => {
    const response = await fetch('/api/emailexists', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    return data;
  }
);

export const verifyUser = createAsyncThunk(
  'userReducer/verifyUser',
  async (token) => {
    const response = await fetch('/api/verifyuser', {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
);

export const saveQuizResult = createAsyncThunk(
  'userReducer/savequiz',
  async ({ percentage, quizId, username }) => {
    await fetch(`/api/user/${username}/savequiz`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ percentage, quizId }),
    });
  }
);

export const sendForm = createAsyncThunk(
  'manipulateReducer/sendForm',
  async (quizData) => {
    const response = await fetch('/api/user/:id/createquiz', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(quizData),
    });
    const data = response.json();
    return data;
  }
);

export const getUserQuizzes = createAsyncThunk(
  'quizzesReducer/getUserQuizzes',
  async (username) => {
    const response = await fetch(`/api/user/${username}`);
    const data = await response.json();
    return data;
  }
);

export const getCategoryQuiz = createAsyncThunk(
  'quizzesReducer/getCategoryQuiz',
  async (category) => {
    const response = await fetch(`/api/quizzes/category/${category}`);
    const data = await response.json();
    return data;
  }
);

export const deleteQuiz = createAsyncThunk(
  'quizzesReducer/deleteQuiz',
  async ({ quizId, username }) => {
    const response = await fetch(`/api/user/${username}/deletequiz`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ quizId }),
    });
    const data = await response.json();
    return data;
  }
);

export const getQuizEdit = createAsyncThunk(
  'manipulateReducer/getQuizEdit',
  async (id) => {
    const response = await fetch(`/api/quizzes/quiz/${id}`);
    const data = await response.json();
    return data;
  }
);

export const editQuizThunk = createAsyncThunk(
  'manipulateReducer/editQuizThunk',
  async (quizData) => {
    const response = await fetch(`/api/user/${quizData.username}/editquiz`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(quizData),
    });

    const data = await response.json();
    return data;
  }
);
