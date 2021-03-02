import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { verifyUser } from '../../slices/user-slice/async-actions';
import { selectUserReducer } from '../../slices/user-slice/user-slice';

const useVerifyUser = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, username } = useAppSelector(selectUserReducer);

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if (token) {
      dispatch(verifyUser());
    }
  }, [dispatch]);

  return { isAuthenticated, username };
};

export default useVerifyUser;
