import { createSlice } from '@reduxjs/toolkit';
import { getQuizzes, getCurrentQuiz, searchQuizzes } from '../asyncActions';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export const quizzesSlice = createSlice({
  name: 'quizzesReducer',
  initialState: {
    quizzes: {
      mostPlayed: [],
      quizzesSearchedData: [],
    },
    userAnswer: '',
    currentAnswers: [],
    userStats: {
      correctAnswers: 0,
      wrongAnswers: 0,
      totalAnswered: 0,
      toBeAnswered: 0,
    },
    currentQuiz: {
      creatorName: '',
      name: '',
      questions: [
        {
          question: '',
          answer: '',
          possibleAnswers: [],
        },
      ],
      timesPlayed: 0,
      image: {},
    },
    currentQuestion: 0,
    currentQuestionAnswered: false,
    userAnsweredCorrect: false,
    userAnsweredWrong: false,
    quizzesFetchState: false,
    quizzesSearchedData: false,
    quizFetchState: false,
    historicOfAnswers: [],
    query: '',
  },
  reducers: {
    setUserAnswer: (state, action) => {
      state.userAnswer = action.payload;
      const { answer } = state.currentQuiz.questions[state.currentQuestion];

      if (action.payload === answer) {
        state.userStats.correctAnswers += 1;
        state.userAnsweredCorrect = true;
        state.historicOfAnswers[state.currentQuestion] = 'correct';
      } else {
        state.userStats.wrongAnswers += 1;
        state.userAnsweredWrong = true;
        state.historicOfAnswers[state.currentQuestion] = 'wrong';
      }
      state.currentQuestionAnswered = true;
    },
    nextQuestion: (state) => {
      state.userAnswer = '';
      state.userAnsweredCorrect = false;
      state.userAnsweredWrong = false;
      state.currentQuestionAnswered = false;
      state.currentQuestion += 1;
      if (state.currentQuestion === state.currentQuiz.questions.length) {
        state.currentQuiz = {
          creator: '',
          name: '',
          questions: [
            {
              question: '',
              answer: '',
              possibleAnswers: [],
            },
          ],
          timesPlayed: 0,
        };
        state.currentQuestion = 0;
        state.currentAnswers = [];
      }
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: {
    [getQuizzes.pending]: (state) => {
      state.quizzesFetchState = 'loading';
    },
    [getQuizzes.fulfilled]: (state, action) => {
      if (action.payload.status === 'success') {
        state.quizzes = { ...state.quizzes, ...action.payload };
        state.quizzesFetchState = 'fulfilled';
      }
    },
    [getQuizzes.rejected]: (state) => {
      state.quizzesFetchState = 'error';
    },

    [getCurrentQuiz.pending]: (state) => {
      state.quizFetchState = 'loading';
    },
    [getCurrentQuiz.fulfilled]: (state, action) => {
      if (action.payload.status === 'success') {
        const { quiz } = action.payload;
        state.currentQuiz = quiz;
        const { answer } = quiz.questions[state.currentQuestion];
        const { possibleAnswers } = quiz.questions[state.currentQuestion];

        const groupAnswers = [...possibleAnswers, answer];
        shuffleArray(groupAnswers);
        state.currentAnswers = groupAnswers;
        state.quizFetchState = 'fetched';
      }
    },
    [getCurrentQuiz.rejected]: (state) => {
      state.quizFetchState = 'error';
    },
    [searchQuizzes.pending]: (state) => {
      state.quizSearchFetchState = 'loading';
    },
    [searchQuizzes.fulfilled]: (state, action) => {
      state.quizzes.quizzesSearchedData = action.payload.quizzesSearchedData;
      state.quizSearchFetchState = 'fulfilled';
    },
    [searchQuizzes.rejected]: (state) => {
      state.quizSearchFetchState = 'error';
    },
  },
});

export const {
  setQuiz,
  setUserAnswer,
  nextQuestion,
  setQuery,
} = quizzesSlice.actions;

export const selectQuizReducer = (state) => state.quizzesReducer;
export const selectQuiz = (state) => state.quizzesReducer.currentQuiz;

export default quizzesSlice.reducer;
