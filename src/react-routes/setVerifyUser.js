import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../async-actions';
import { selectUserReducer } from '../slices/user-slice';

export default () => {
  const dispatch = useDispatch();
  const { isAuthenticated, checkAuth, username } = useSelector(
    selectUserReducer
  );
  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    dispatch(verifyUser(token));
  }, []);

  return { isAuthenticated, checkAuth, username };
};
