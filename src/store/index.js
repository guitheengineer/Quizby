import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/formSlice';
import quizzesReducer from '../slices/quizzesSlice';
import userReducer from '../slices/userSlice';
import generalReducer from '../slices/generalSlice';
import manipulateReducer from '../slices/manipulateSlice';

export default configureStore({
  reducer: {
    generalReducer,
    userReducer,
    formReducer,
    quizzesReducer,
    manipulateReducer,
  },
});
