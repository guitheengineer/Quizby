import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/formSlice';
import quizzesReducer from '../slices/quizzesSlice';
import userReducer from '../slices/userSlice';
import generalReducer from '../slices/generalSlice';

export default configureStore({
  reducer: {
    generalReducer,
    userReducer,
    formReducer,
    quizzesReducer,
  },
});
