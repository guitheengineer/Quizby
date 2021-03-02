import { RootState } from './../../store/rootReducer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SliceState {
  question: string;
  answer: string;
  possibleAnswers: string[];
  userAnswer: string;
}

const initialState: SliceState = {
  question: 'Who is the first black president of America',
  answer: 'Barack Obama',
  userAnswer: '',
  possibleAnswers: ['James Warren', 'Kanye West', 'Barack Obama'],
};

const demoSlice = createSlice({
  name: 'demoReducer',
  initialState,
  reducers: {
    setDemoAnswer: (state, { payload }: PayloadAction<string>) => {
      if (!state.userAnswer) {
        state.userAnswer = payload;
      }
    },
  },
});

export const { setDemoAnswer } = demoSlice.actions;

export const selectDemoReducer = (state: RootState) => state.demo;

export default demoSlice.reducer;
