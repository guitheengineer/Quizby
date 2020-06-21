const { createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchData = createAsyncThunk(
  "rootReducer/fetchQuestions",
  async () => {
    const response = await fetch("/api");
    return response.json();
  }
);
