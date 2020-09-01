import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/form-slice';
import quizzesReducer from '../slices/quizzes-slice';
import userReducer from '../slices/user-slice';
import generalReducer from '../slices/general-slice';
import manipulateReducer from '../slices/manipulate-slice';

export default configureStore({
  reducer: {
    generalReducer,
    userReducer,
    formReducer,
    quizzesReducer,
    manipulateReducer,
  },
});
