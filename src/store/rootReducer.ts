import form from 'slices/form-slice';
import quizzes from 'slices/quizzes-slice';
import user from 'slices/user-slice';
import general from 'slices/general-slice';
import manipulate from 'slices/manipulate-slice';
import demo from 'slices/demo-slice';
import { AnyAction, combineReducers } from '@reduxjs/toolkit';

const combinedReducers = combineReducers({
  general,
  user,
  form,
  quizzes,
  manipulate,
  demo,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === 'userReducer/resetUser') {
    state = undefined;
  }
  return combinedReducers(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
