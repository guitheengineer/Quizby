import { createSlice } from '@reduxjs/toolkit';
import {
  getQuizzes,
  getCurrentQuiz,
  searchQuizzes,
  getRecommendedQuiz,
  getUserQuizzes,
  getCategoryQuiz,
  deleteQuiz,
} from '../asyncActions';

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
      recommended: {},
      category: [],
    },
    getUserQuizzesState: '',
    userAnswer: '',
    currentAnswers: [],
    userStats: {
      correctAnswers: null,
      wrongAnswers: null,
      totalAnswered: null,
      toBeAnswered: null,
      totalOfAnswers: null,
      percentage: null,
      done: false,
    },
    currentQuiz: {},
    currentQuestion: 0,
    currentQuestionAnswered: false,
    userAnsweredCorrect: false,
    userAnsweredWrong: false,
    quizzesFetchState: false,
    quizzesSearchedData: false,
    quizFetchState: false,
    recommendedQuizFetchState: false,
    deleteQuizFetchState: '',
    historicOfAnswers: [],
    query: '',
    quizzesPlayed: [],
    quizzesCreated: [],
    quizAverage: 0,
    countQuizzesPlayed: 0,
    countQuizzesCreated: 0,
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
      state.userStats.totalAnswered += 1;

      state.userStats.totalOfAnswers = state.currentQuiz.questions.length;
      state.userStats.toBeAnswered =
        state.userStats.totalOfAnswers - state.userStats.totalAnswered;
      state.userStats.percentage =
        (100 * state.userStats.correctAnswers) / state.userStats.totalOfAnswers;
      if (state.userStats.totalOfAnswers === state.userStats.totalAnswered) {
        state.userStats.done = true;
      }
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
              fakeAnswer1: '',
              fakeAnswer2: '',
              fakeAnswer3: '',
              answer: '',
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
    resetUserStats: (state) => {
      state.userStats = {
        correctAnswers: null,
        wrongAnswers: null,
        totalAnswered: null,
        toBeAnswered: null,
        totalOfAnswers: null,
        percentage: null,
        done: false,
      };
      state.currentQuestion = 0;
      state.currentQuestionAnswered = false;
      state.userAnsweredCorrect = false;
      state.userAnsweredWrong = false;
      state.historicOfAnswers = [];
      state.userAnswer = '';
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
        const {
          answer,
          fakeAnswer1,
          fakeAnswer2,
          fakeAnswer3,
        } = quiz.questions[state.currentQuestion];

        const groupAnswers = [fakeAnswer1, fakeAnswer2, fakeAnswer3, answer];
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
    // handle errors and loading
    [getRecommendedQuiz.fulfilled]: (state, action) => {
      state.quizzes.recommended = action.payload.recommendedQuiz;
      state.recommendedQuizFetchState = 'fulfilled';
    },
    [deleteQuiz.rejected]: (state) => {
      state.deleteQuizFetchState = 'rejected';
    },
    [deleteQuiz.fulfilled]: (state) => {
      state.deleteQuizFetchState = 'fulfilled';
    },
    [deleteQuiz.pending]: (state) => {
      state.deleteQuizFetchState = 'pending';
    },
    [getUserQuizzes.fulfilled]: (state, action) => {
      const {
        quizzes,
        quizAverage,
        countQuizzesCreated,
        countQuizzesPlayed,
      } = action.payload;
      state.quizzesPlayed = quizzes.quizzesPlayed;
      state.quizzesCreated = quizzes.quizzesCreated;
      state.quizAverage = quizAverage;
      state.countQuizzesCreated = countQuizzesCreated;
      state.countQuizzesPlayed = countQuizzesPlayed;
      state.getUserQuizzesState = 'fulfilled';
      state.deleteQuizFetchState = '';
    },
    [getCategoryQuiz.fulfilled]: (state, action) => {
      state.quizzes.category = action.payload;
    },
  },
});

export const {
  setQuiz,
  setUserAnswer,
  nextQuestion,
  setQuery,
  resetUserStats,
} = quizzesSlice.actions;

export const selectQuizReducer = (state) => state.quizzesReducer;
export const selectQuiz = (state) => state.quizzesReducer.currentQuiz;

export default quizzesSlice.reducer;
