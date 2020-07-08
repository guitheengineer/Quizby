const { createAsyncThunk } = require("@reduxjs/toolkit");

export const getMostPlayedQuizzes = createAsyncThunk(
  "quizzesReducer/getMostPlayedQuizzes",
  async () => {
    const response = await fetch("/getPopularQuizzes");
    return await response.json();
  }
);

export const getCurrentQuiz = createAsyncThunk(
  "quizzesReducer/getCurrentQuiz",
  async (id) => {
    const response = await fetch(`/play/:${id}`);

    return await response.json();
  }
);
