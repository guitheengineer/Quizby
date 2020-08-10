import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentQuiz } from '../asyncActions';
import { selectQuiz } from '../slices/quizzesSlice';

export default () => {
  const dispatch = useDispatch();
  const quiz = useSelector(selectQuiz);

  useEffect(() => {
    dispatch(getCurrentQuiz());
  }, []);

  return quiz;
};
