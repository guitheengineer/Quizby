import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { sendForm } from '../asyncActions';

const manipulateSlice = createSlice({
  name: 'manipulateReducer',
  initialState: {
    name: '',
    description: '',
    creationQuizzes: [
      {
        id: shortid.generate(),
        question: '',
        fakeAnswer1: '',
        fakeAnswer2: '',
        answer: '',
      },
    ],
  },
  reducers: {
    formQuizInserted: (state, action) => {},
    addCreationQuiz: (state) => {
      const newQuiz = {
        id: shortid.generate(),
        question: '',
        fakeanswer1: '',
        fakeanswer2: '',
        answer: '',
      };
      state.creationQuizzes.push(newQuiz);
    },
    removeCreatedQuiz: (state, action) => {
      const id = action.payload;
      const filteredArray = state.creationQuizzes.filter(
        (quiz) => quiz.id !== id
      );
      state.creationQuizzes = filteredArray;
    },
    changeInput: (state, action) => {
      console.log(action.payload);
      const { value, type, id } = action.payload;
      if (id === undefined) {
        state[type] = value;
      } else {
        const newArray = state.creationQuizzes.map((data) => {
          if (data.id === id) {
            data = {
              ...data,
              [type]: value,
            };
          }
          return data;
        });
        state.creationQuizzes = newArray;
      }
      console.log(state.creationQuizzes);
    },
  },
  extraReducers: {
    [sendForm.fulfilled]: (state) => {},
  },
});

export const {
  addCreationQuiz,
  removeCreatedQuiz,
  formQuizInserted,
  changeInput,
} = manipulateSlice.actions;

export const selectManipulateReducer = (state) => state.manipulateReducer;

export default manipulateSlice.reducer;
