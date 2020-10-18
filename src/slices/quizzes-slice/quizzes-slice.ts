import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getCurrentQuiz,
  searchQuizzes,
  getUserQuizzes,
  getCategoryQuiz,
  deleteQuiz,
  quizzesAdded,
} from './async-actions';
import { shuffleArray } from '../../utils';
import { RootState } from '../../store/store';
import { QuizClient } from 'types';

interface SliceState {
  quizzes: {
    mostPlayed: any[];
    quizzesSearchedData: any[];
    recommended: any;
    category: any;
  };
  getUserQuizzesState: string;
  userAnswer: string;
  currentAnswers: any[];
  currentQuiz: {
    _id?: string;
    questions: any[];
    image: {
      data: string;
      contentType: string;
    };
    creator: string;
    description: string;
    name: string;
    timesPlayed: number;
  };
  userStats: {
    correctAnswers: number;
    wrongAnswers: number;
    totalAnswered: number;
    toBeAnswered: number;
    totalOfAnswers: number;
    percentage: number;
    done: boolean;
  };
  currentQuestion: number;
  currentQuestionAnswered: boolean;
  userAnsweredCorrect: null | boolean;
  quizzesFetchState: string;
  quizSearchFetchState: string;
  quizzesSearchedData: any[];
  quizFetchState: string;
  recommendedQuizFetchState: string;
  deleteQuizFetchState: string;
  historicOfAnswers: string[];
  query: string;
  quizzesPlayed: any[];
  quizzesCreated: any[];
  quizAverage: number;
  countQuizzesPlayed: number;
  countQuizzesCreated: number;
}

const initialState: SliceState = {
  quizzes: {
    mostPlayed: [],
    quizzesSearchedData: [],
    recommended: {},
    category: {},
  },
  getUserQuizzesState: '',
  userAnswer: '',
  currentAnswers: [],
  userStats: {
    correctAnswers: 0,
    wrongAnswers: 0,
    totalAnswered: 0,
    toBeAnswered: 0,
    totalOfAnswers: 0,
    percentage: 0,
    done: false,
  },
  currentQuiz: {
    _id: '',
    image: {
      data: '',
      contentType: '',
    },
    questions: [],
    creator: '',
    name: '',
    description: '',
    timesPlayed: 0,
  },
  currentQuestion: 0,
  currentQuestionAnswered: false,
  userAnsweredCorrect: null,
  quizzesFetchState: '',
  quizzesSearchedData: [],
  quizSearchFetchState: '',
  quizFetchState: '',
  recommendedQuizFetchState: '',
  deleteQuizFetchState: '',
  historicOfAnswers: [],
  query: '',
  quizzesPlayed: [],
  quizzesCreated: [],
  quizAverage: 0,
  countQuizzesPlayed: 0,
  countQuizzesCreated: 0,
};

export const quizzesSlice = createSlice({
  name: 'quizzesReducer',
  initialState,
  reducers: {
    setUserAnswer: (state, { payload }: PayloadAction<string>) => {
      state.userAnswer = payload;
      const { answer } = state.currentQuiz.questions[state.currentQuestion];

      if (payload === answer) {
        state.userStats.correctAnswers += 1;
        state.userAnsweredCorrect = true;
        state.historicOfAnswers[state.currentQuestion] = 'correct';
      } else {
        state.userStats.wrongAnswers += 1;
        state.userAnsweredCorrect = false;
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
      state.userAnsweredCorrect = null;
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
          description: '',
          image: { data: '', contentType: '' },
          timesPlayed: 0,
        };
        state.currentQuestion = 0;
        state.currentAnswers = [];
      }
    },
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },
    resetUserStats: (state) => {
      state.userStats = {
        correctAnswers: 0,
        wrongAnswers: 0,
        totalAnswered: 0,
        toBeAnswered: 0,
        totalOfAnswers: 0,
        percentage: 0,
        done: false,
      };
      state.currentQuestion = 0;
      state.currentQuestionAnswered = false;
      state.userAnsweredCorrect = false;
      state.historicOfAnswers = [];
      state.userAnswer = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(quizzesAdded.pending, (state) => {
      state.quizzesFetchState = 'loading';
    });
    builder.addCase(
      quizzesAdded.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        const { mostPlayed, recommended } = payload;
        state.quizzes.mostPlayed = mostPlayed;
        state.quizzes.recommended = recommended;
        state.quizzesFetchState = 'fulfilled';
      }
    );
    builder.addCase(quizzesAdded.rejected, (state) => {
      state.quizzesFetchState = 'rejected';
    });
    builder.addCase(getCurrentQuiz.pending, (state) => {
      state.quizFetchState = 'loading';
    });
    builder.addCase(
      getCurrentQuiz.fulfilled,
      (state, { payload }: PayloadAction<QuizClient>) => {
        const { quiz }: any = payload;
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
        state.quizFetchState = 'fulfilled';
      }
    );
    builder.addCase(getCurrentQuiz.rejected, (state) => {
      state.quizFetchState = 'rejected';
    });
    builder.addCase(searchQuizzes.pending, (state) => {
      state.quizSearchFetchState = 'loading';
    });
    builder.addCase(searchQuizzes.fulfilled, (state, { payload }) => {
      state.quizzes.quizzesSearchedData = payload.quizzesSearchedData;
      state.quizSearchFetchState = 'fulfilled';
    });
    builder.addCase(searchQuizzes.rejected, (state) => {
      state.quizSearchFetchState = 'rejected';
    });
    builder.addCase(deleteQuiz.rejected, (state) => {
      state.deleteQuizFetchState = 'rejected';
    });
    builder.addCase(deleteQuiz.fulfilled, (state) => {
      state.deleteQuizFetchState = 'rejected';
    });
    builder.addCase(deleteQuiz.pending, (state) => {
      state.deleteQuizFetchState = 'rejected';
    });
    builder.addCase(
      getUserQuizzes.fulfilled,
      (
        state,
        {
          payload,
        }: PayloadAction<{
          quizzes: {
            quizzesPlayed: any[];
            quizzesCreated: any[];
          };
          quizAverage: number;
          countQuizzesCreated: number;
          countQuizzesPlayed: number;
        }>
      ) => {
        const {
          quizzes,
          quizAverage,
          countQuizzesCreated,
          countQuizzesPlayed,
        } = payload;
        state.quizzesPlayed = quizzes.quizzesPlayed;
        state.quizzesCreated = quizzes.quizzesCreated;
        state.quizAverage = quizAverage;
        state.countQuizzesCreated = countQuizzesCreated;
        state.countQuizzesPlayed = countQuizzesPlayed;
        state.getUserQuizzesState = 'fulfilled';
        state.deleteQuizFetchState = '';
      }
    );
    builder.addCase(
      getCategoryQuiz.fulfilled,
      (state, { payload }: PayloadAction<string>) => {
        state.quizzes.category = payload;
      }
    );
  },
});

export const {
  setUserAnswer,
  nextQuestion,
  setQuery,
  resetUserStats,
} = quizzesSlice.actions;

export const selectQuizReducer = (state: RootState) => state.quizzes;
export const selectQuiz = (state: RootState) => state.quizzes.currentQuiz;

export default quizzesSlice.reducer;
