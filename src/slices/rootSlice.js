import { useSelector } from "react-redux";
import { fetchData } from "../asyncActions/fetchQuestions";

const { createSlice } = require("@reduxjs/toolkit");

export const rootSlice = createSlice({
  name: "rootReducer",
  initialState: {
    data: [],
    question: "",
    answer: "",
    userAnswer: null,
    possibleAnswers: [],
    dataIsFetched: false,
    logoIsShowing: true,
  },
  reducers: {
    setLogoIsShowing: (state, action) => {
      state.logoIsShowing = action.payload;
    },
    setUserAnswer: (state, action) => {
      state.userAnswer = action.payload.e;
      // console.log(state.possibleAnswers);
      // state.possibleAnswers = state.possibleAnswers.filter(
      //   (x) => x == state.userAnswer
      // );
      // console.log(state.possibleAnswers);
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload;
      const questionsFind = action.payload.questionsFind;
      const questionMaxLength = questionsFind.length;
      let random = Math.floor(Math.random() * questionMaxLength);
      state.question = questionsFind[random].question;
      state.answer = questionsFind[random].answer;

      const possibleAnswersFind =
        action.payload.possibleAnswersFind[0].possibleAnswers;
      const arr = [];
      const possibleAnswersMaxLength = possibleAnswersFind.length;

      while (arr.length < 3) {
        let n = Math.floor(Math.random() * possibleAnswersMaxLength);
        if (arr.indexOf(n) === -1 && possibleAnswersFind[n] !== state.answer) {
          arr.push(n);
        }
      }
      state.possibleAnswers = [
        possibleAnswersFind[arr[0]],
        possibleAnswersFind[arr[1]],
        possibleAnswersFind[arr[2]],
        state.answer,
      ];
      state.dataIsFetched = true;
    },
  },
});

export const { setUserAnswer, setLogoIsShowing } = rootSlice.actions;

export const selectQuestions = (state) => state.rootReducer.data;
export default rootSlice.reducer;
