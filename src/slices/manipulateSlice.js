import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { sendForm } from '../asyncActions';

const manipulateSlice = createSlice({
  name: 'manipulateReducer',
  initialState: {
    saveQuizFetchState: '',
    id: '',
    name: '',
    description: '',
    category: '',
    image: {
      data: '',
      contentType: '',
    },
    creationQuizzes: [
      {
        id: shortid.generate(),
        question: '',
        fakeAnswer1: '',
        fakeAnswer2: '',
        fakeAnswer3: '',
        answer: '',
      },
    ],
  },
  reducers: {
    addCreationQuiz: (state) => {
      const newQuiz = {
        id: shortid.generate(),
        question: '',
        fakeAnswer1: '',
        fakeAnswer2: '',
        fakeAnswer3: '',
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
    changeImage: (state, action) => {
      const { contentType, data } = action.payload;
      state.image.contentType = contentType;
      state.image.data = data;
    },
    changeInput: (state, action) => {
      const { value, type, id } = action.payload;
      if (id === '') {
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
    },
  },
  extraReducers: {
    [sendForm.pending]: (state) => {
      state.saveQuizFetchState = 'pending';
    },
    [sendForm.fulfilled]: (state, action) => {
      console.log(action.payload.data.newQuiz._id);
      state.id = action.payload.data.newQuiz._id;
      state.saveQuizFetchState = 'fulfilled';
    },
    [sendForm.rejected]: (state) => {
      state.saveQuizFetchState = 'rejected';
    },
  },
});

export const {
  addCreationQuiz,
  removeCreatedQuiz,
  changeInput,
  changeImage,
} = manipulateSlice.actions;

export const selectManipulateReducer = (state) => state.manipulateReducer;

export default manipulateSlice.reducer;
