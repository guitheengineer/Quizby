const { createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchData = createAsyncThunk(
  "rootReducer/fetchQuestions",
  async () => {
    try {
      const response = await fetch("/api");
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  }
);
