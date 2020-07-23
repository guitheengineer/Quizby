import { createSlice } from '@reduxjs/toolkit';
// import { fetchData, postSignup, postLogin } from '../asyncActions';

export const rootSlice = createSlice({
  name: 'rootReducer',
  initialState: {
    logoShouldAppear: true,
  },
  reducers: {
    setLogo: (state, action) => {
      state.logoShouldAppear = action.payload;
    },
  },
  extraReducers: {
    // [fetchData.pending]: (state) => {
    //   state.dataIsFetched = "loading";
    // },
    // [fetchData.fulfilled]: (state, action) => {
    //   state.data = action.payload;
    //   const questionsFind = action.payload.questionsFind;
    //   const questionMaxLength = questionsFind.length;
    //   let random = Math.floor(Math.random() * questionMaxLength);
    //   state.question = questionsFind[random].question;
    //   state.answer = questionsFind[random].answer;
    //   const possibleAnswersFind =
    //     action.payload.possibleAnswersFind[0].possibleAnswers;
    //   const arr = [];
    //   const possibleAnswersMaxLength = possibleAnswersFind.length;
    //   while (arr.length < 3) {
    //     let n = Math.floor(Math.random() * possibleAnswersMaxLength);
    //     if (arr.indexOf(n) === -1 && possibleAnswersFind[n] !== state.answer) {
    //       arr.push(n);
    //     }
    //   }
    //   state.possibleAnswers = [
    //     possibleAnswersFind[arr[0]],
    //     possibleAnswersFind[arr[1]],
    //     possibleAnswersFind[arr[2]],
    //     state.answer,
    //   ];
    //   state.dataIsFetched = true;
    // },
    // [fetchData.rejected]: (state) => {
    //   state.dataIsFetched = "error";
    // },
    // [postSignup.pending]: (state) => {
    //   console.log("pending");
    // },
    // [postSignup.fulfilled]: (state, action) => {
    //   console.log("fulfilled");
    //   console.log(action.payload);
    // },
    // [postSignup.rejected]: (state) => {
    //   console.log("postrejected");
    // },
    // [postLogin.pending]: (state) => {
    //   console.log("postlogin pending");
    // },
    // [postLogin.fulfilled]: (state, action) => {
    //   console.log("postlogin fulfilled", action.payload);
    // },
    // [postLogin.rejected]: (state) => {
    //   console.log("postlogin rejected");
    // },
  },
});

export const { setUserAnswer, setLogoIsShowing } = rootSlice.actions;

export const selectQuestions = (state) => state.rootReducer.data;
export default rootSlice.reducer;
