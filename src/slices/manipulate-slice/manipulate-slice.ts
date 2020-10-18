import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { sendForm, editQuizThunk } from './async-actions';
import { RootState } from '../../store/store';
import { QuizCreation, QuizForm, QuizComplete } from '../../types';

interface SliceState extends QuizForm {
  saveQuizFetchState: string;
  editQuizFetchState: string;
  isEditing: boolean;
  creationQuizzes: any[];
}

const initialState: SliceState = {
  saveQuizFetchState: '',
  editQuizFetchState: '',
  _id: shortid.generate(),
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
};

const manipulateSlice = createSlice({
  name: 'manipulateReducer',
  initialState,
  reducers: {
    addCreationQuiz: (state) => {
      const newQuiz: QuizCreation = {
        id: shortid.generate(),
        question: '',
        fakeAnswer1: '',
        fakeAnswer2: '',
        fakeAnswer3: '',
        answer: '',
      };
      state.creationQuizzes.push(newQuiz);
    },
    setEditQuiz: (state, { payload }: PayloadAction<QuizComplete>) => {
      const { category, description, image, questions, _id, name } = payload;
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
      { payload }: PayloadAction<{ contentType: string; data: string }>
    ) => {
      const { contentType, data } = payload;
      state.image.contentType = contentType;
      state.image.data = data;
    },
    changeInput: (
      state,
      {
        payload,
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
      const { value, type, index } = payload;
      if (type === 'name' || type === 'category' || type === 'description') {
        state[type] = value;
      }
      if (index) {
        state.creationQuizzes[index][type] = value;
      }
    },
    setNewQuizId: (state, { payload }: PayloadAction<string>) => {
      state._id = payload;
    },
    quizSaved: (state) => {
      state.saveQuizFetchState = 'saved';
      state.editQuizFetchState = 'saved';
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
        { payload }: PayloadAction<{ data: { newQuiz: { _id: string } } }>
      ) => {
        state._id = payload.data.newQuiz._id;
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
  quizSaved,
  setEditQuiz,
  setNewQuizId,
} = manipulateSlice.actions;

export const selectManipulateReducer = (state: RootState) => state.manipulate;

export default manipulateSlice.reducer;
