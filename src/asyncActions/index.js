import { createAsyncThunk } from '@reduxjs/toolkit';

export const checkIfUserExists = createAsyncThunk(
  'formReducer/checkIfUserExists',
  async (value) => {
    try {
      const response = await fetch('/userexists', {
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
  async () => {
    const response = await fetch('/quizzes');
    const data = await response.json();
    return data;
  }
);

export const searchQuizzes = createAsyncThunk(
  'quizzesReducer/searchQuizzes',
  async (name) => {
    const response = await fetch(`/quizzes/search?q=${name}`);
    const data = await response.json();
    return data;
  }
);

export const getCurrentQuiz = createAsyncThunk(
  'quizzesReducer/getCurrentQuiz',
  async () => {
    const id = window.location.pathname.split('/').pop();
    const response = await fetch(`/quizzes/play/${id}`);
    const data = await response.json();
    return data;
  }
);

export const getRecommendedQuiz = createAsyncThunk(
  'quizzesReducer/getRecommendedQuiz',
  async () => {
    const response = await fetch(`/quizzes/recommended`);
    const data = await response.json();
    return data;
  }
);

export const postLogin = createAsyncThunk(
  'formReducer/postLogin',
  async ({ email, password }) => {
    const response = await fetch('/login', {
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
    const response = await fetch('/signup', {
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
    const response = await fetch('/emailexists', {
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
    const response = await fetch('/verifyuser', {
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
  async ({ percentage, quizId, userId }) => {
    await fetch('/user/savequiz', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ percentage, quizId, userId }),
    });
  }
);

export const sendForm = createAsyncThunk(
  'manipulateReducer/sendForm',
  async (data) => {
    console.log(data);
    // await fetch('/createquiz', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({ id, quizinfo }),
    // });
  }
);
