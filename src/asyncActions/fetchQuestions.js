const { createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchData = createAsyncThunk("fetchQuestions", async () => {
  const response = await fetch("/api");
  return response.json();
});
