import { createAsyncThunk } from '@reduxjs/toolkit';
import postFetch from '../utils/postFetch';
import { UserSignup, UserClient } from '../../types';

const reducer = 'formReducer';

export const checkIfUserExists = createAsyncThunk(
  `${reducer}/checkIfUserExists`,
  (value: string) => postFetch('userexists', { username: value })
);

export const postLogin = createAsyncThunk(
  `${reducer}/postLogin`,
  async ({ email, password }: UserClient) =>
    postFetch('login', { email, password })
);

export const postSignup = createAsyncThunk(
  `${reducer}/postSignup`,
  async ({ username, email, password }: UserSignup) =>
    postFetch('signup', { username, email, password })
);

export const checkIfEmailExists = createAsyncThunk(
  `${reducer}/checkIfEmailExists`,
  async (email: string) => postFetch('emailexists', { email })
);
