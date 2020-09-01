import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { sendForm, editQuizThunk } from '../async-actions';

const manipulateSlice = createSlice({
  name: 'manipulateReducer',
  initialState: {
    saveQuizFetchState: '',
    editQuizFetchState: '',
    id: shortid.generate(),
    name: '',
    description: '',
    category: '',
    isEditing: false,
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
    setEditQuiz: (state, action) => {
      const {
        category,
        description,
        image,
        questions,
        _id,
        name,
      } = action.payload;
      state.category = category;
      state.name = name;
      state.id = _id;
      state.description = description;
      state.image.data = image.data;
      state.image.contentType = image.contentType;
      state.creationQuizzes = questions;
      state.isEditing = true;
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
      const { value, type, index } = action.payload;
      if (
        type === 'question' ||
        type === 'fakeAnswer1' ||
        type === 'fakeAnswer2' ||
        type === 'fakeAnswer3' ||
        type === 'answer'
      ) {
        state.creationQuizzes[index][type] = value;
      } else {
        state[type] = value;
      }
    },
    setNewQuizId: (state, action) => {
      state.id = action.payload;
    },
    quizSaved: (state) => {
      state.saveQuizFetchState = 'saved';
      state.editQuizFetchState = 'saved';
    },
  },
  extraReducers: {
    [sendForm.pending]: (state) => {
      state.saveQuizFetchState = 'pending';
    },
    [sendForm.fulfilled]: (state, action) => {
      state.id = action.payload.data.newQuiz._id;
      state.saveQuizFetchState = 'fulfilled';
    },
    [sendForm.rejected]: (state) => {
      state.saveQuizFetchState = 'rejected';
    },
    [editQuizThunk.pending]: (state) => {
      state.editQuizFetchState = 'pending';
    },
    [editQuizThunk.fulfilled]: (state) => {
      state.editQuizFetchState = 'fulfilled';
    },
    [editQuizThunk.rejected]: (state) => {
      state.editQuizFetchState = 'rejected';
    },
  },
});

export const {
  addCreationQuiz,
  removeCreatedQuiz,
  changeInput,
  changeImage,
  quizSaved,
  setEditQuiz,
  setNewQuizId,
} = manipulateSlice.actions;

export const selectManipulateReducer = (state) => state.manipulateReducer;

export default manipulateSlice.reducer;
