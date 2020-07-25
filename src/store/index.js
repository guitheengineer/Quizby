import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/formSlice';
import quizzesReducer from '../slices/quizzesSlice';

export default configureStore({
  reducer: {
    formReducer,
    quizzesReducer,
  },
});
