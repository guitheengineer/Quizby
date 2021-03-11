import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { verifyUser } from 'slices/user-slice';

const useVerifyUser = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, username } = useAppSelector((state) => state.user);

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if (token) {
      dispatch(verifyUser());
    }
  }, [dispatch]);

  return { isAuthenticated, username };
};

export default useVerifyUser;
