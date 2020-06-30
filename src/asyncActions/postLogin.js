import { createAsyncThunk } from "@reduxjs/toolkit";

export const postLogin = createAsyncThunk(
  "rootReducer/postLogin",
  async ({ email, password }) => {
    console.log(password);
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  }
);
