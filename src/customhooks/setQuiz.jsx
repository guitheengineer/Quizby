import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentQuiz } from '../async-actions';
import { selectQuiz } from '../slices/quizzes-slice';

export default () => {
  const dispatch = useDispatch();
  const quiz = useSelector(selectQuiz);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCurrentQuiz(id));
  }, []);

  return quiz;
};
