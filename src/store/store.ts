import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, createSelectorHook } from 'react-redux';
import form from '../slices/form-slice/form-slice';
import quizzes from '../slices/quizzes-slice';
import user from '../slices/user-slice/user-slice';
import general from '../slices/general-slice/general-slice';
import manipulate from '../slices/manipulate-slice';
import demo from '../slices/demo-slice';

const rootReducer = combineReducers({
  general,
  user,
  form,
  quizzes,
  manipulate,
  demo,
});

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector = createSelectorHook<RootState>();
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
