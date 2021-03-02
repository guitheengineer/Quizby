import form from 'slices/form-slice/form-slice';
import quizzes from 'slices/quizzes-slice';
import user from 'slices/user-slice/user-slice';
import general from 'slices/general-slice/general-slice';
import manipulate from 'slices/manipulate-slice';
import demo from 'slices/demo-slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  general,
  user,
  form,
  quizzes,
  manipulate,
  demo,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
