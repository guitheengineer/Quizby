import { createAsyncThunk } from '@reduxjs/toolkit';

export const checkIfUserExists = createAsyncThunk(
  'formReducer/checkIfUserExists',
  async (value) => {
    try {
      const response = await fetch('/userExists', {
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

export const fetchData = createAsyncThunk(
  'quizzesReducer/fetchQuestions',
  async () => {
    try {
      const response = await fetch('/api');
      return await response.json();
    } catch (err) {
      return err;
    }
  }
);

export const getMostPlayedQuizzes = createAsyncThunk(
  'quizzesReducer/getMostPlayedQuizzes',
  async () => {
    const response = await fetch('/getPopularQuizzes');
    const data = await response.json();
    return data;
  }
);

export const getCurrentQuiz = createAsyncThunk(
  'quizzesReducer/getCurrentQuiz',
  async (id) => {
    const response = await fetch(`/play/:${id}`);
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
    const response = await fetch('/emailExists', {
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
