import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import form from 'slices/form-slice/form-slice';
import quizzes from 'slices/quizzes-slice';
import user from 'slices/user-slice/user-slice';
import general from 'slices/general-slice/general-slice';
import manipulate from 'slices/manipulate-slice';
import demo from 'slices/demo-slice';

const store = configureStore({
  reducer: {
    general,
    user,
    form,
    quizzes,
    manipulate,
    demo,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
