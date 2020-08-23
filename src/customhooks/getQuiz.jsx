import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentQuiz } from '../asyncActions';
import { selectQuiz } from '../slices/quizzesSlice';

export default () => {
  const dispatch = useDispatch();
  const quiz = useSelector(selectQuiz);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCurrentQuiz(id));
  }, []);

  return quiz;
};
