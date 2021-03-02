import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { sendForm, editQuizThunk } from './async-actions';
import { RootState } from '../../store/rootReducer';
import {
  QuizCreation,
  QuizForm,
  QuizComplete,
  ThunkResponses,
} from '../../types';

type SliceState = QuizForm & {
  saveQuizFetchState: ThunkResponses;
  editQuizFetchState: ThunkResponses;
  isEditing: boolean;
  creationQuizzes: {
    id: string;
    question: string;
    fakeAnswer1: string;
    fakeAnswer2: string;
    fakeAnswer3: string;
    answer: string;
  }[];
};

const initialState: SliceState = {
  saveQuizFetchState: null,
  editQuizFetchState: null,
  _id: '',
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
      id: nanoid(),
      question: '',
      fakeAnswer1: '',
      fakeAnswer2: '',
      fakeAnswer3: '',
      answer: '',
    },
  ],
};

const manipulateSlice = createSlice({
  name: 'manipulateReducer',
  initialState,
  reducers: {
    addCreationQuiz: (state) => {
      const newQuiz: QuizCreation = {
        id: nanoid(),
        question: '',
        fakeAnswer1: '',
        fakeAnswer2: '',
        fakeAnswer3: '',
        answer: '',
      };
      state.creationQuizzes.push(newQuiz);
    },
    setEditQuiz: (
      state,
      {
        payload: { category, description, image, questions, _id, name },
      }: PayloadAction<QuizComplete>
    ) => {
      state.category = category;
      state.name = name;
      state._id = _id;
      state.description = description;
      state.image.data = image.data;
      state.image.contentType = image.contentType;
      state.creationQuizzes = questions;
      state.isEditing = true;
    },
    removeCreatedQuiz: (state, { payload }: PayloadAction<string>) => {
      const _id = payload;
      const filteredArray = state.creationQuizzes.filter(
        (quiz) => quiz.id !== _id
      );
      state.creationQuizzes = filteredArray;
    },
    changeImage: (
      state,
      {
        payload: { contentType, data },
      }: PayloadAction<{ contentType: string; data: string }>
    ) => {
      state.image.contentType = contentType;
      state.image.data = data;
    },
    changeInput: (
      state,
      {
        payload: { value, type, index },
      }: PayloadAction<{
        value: string;
        type:
          | 'name'
          | 'description'
          | 'category'
          | 'fakeAnswer1'
          | 'fakeAnswer2'
          | 'fakeAnswer3'
          | 'question'
          | 'answer';
        index?: number;
      }>
    ) => {
      if (type === 'name' || type === 'category' || type === 'description') {
        state[type] = value;
      } else if (index !== undefined) {
        state.creationQuizzes[index][type] = value;
      }
    },
    setNewQuizId: (state, { payload }: PayloadAction<string>) => {
      state._id = payload;
    },
    resetLoadingState: (state) => {
      state.editQuizFetchState = null;
      state.saveQuizFetchState = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendForm.pending, (state) => {
      state.saveQuizFetchState = 'pending';
    });
    builder.addCase(
      sendForm.fulfilled,
      (
        state,
        {
          payload: {
            response: { _id },
          },
        }
      ) => {
        state._id = _id;
        state.saveQuizFetchState = 'fulfilled';
      }
    );
    builder.addCase(sendForm.rejected, (state) => {
      state.saveQuizFetchState = 'rejected';
    });
    builder.addCase(editQuizThunk.pending, (state) => {
      state.editQuizFetchState = 'pending';
    });
    builder.addCase(editQuizThunk.fulfilled, (state) => {
      state.editQuizFetchState = 'fulfilled';
    });

    builder.addCase(editQuizThunk.rejected, (state) => {
      state.editQuizFetchState = 'rejected';
    });
  },
});

export const {
  addCreationQuiz,
  removeCreatedQuiz,
  changeInput,
  changeImage,
  setEditQuiz,
  setNewQuizId,
  resetLoadingState,
} = manipulateSlice.actions;

export const selectManipulateReducer = (state: RootState) => state.manipulate;

export default manipulateSlice.reducer;
