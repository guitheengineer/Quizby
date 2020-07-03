import { createAsyncThunk } from "@reduxjs/toolkit";

export const postSignup = createAsyncThunk(
  "rootReducer/postSignup",
  async ({ username, email, password }) => {
    console.log({ username, email, password });
    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    return await response.json();
  }
);
