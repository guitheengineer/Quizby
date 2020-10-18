import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { verifyUser } from 'slices/user-slice/async-actions';
import { selectUserReducer } from 'slices/user-slice/user-slice';

export default () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, checkAuth, username } = useAppSelector(
    selectUserReducer
  );
  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if (token) {
      dispatch(verifyUser(token));
    }
  }, []);

  return { isAuthenticated, checkAuth, username };
};
