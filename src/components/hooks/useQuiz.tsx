import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCurrentQuiz } from 'slices/quizzes-slice/async-actions';
import { selectQuiz } from 'slices/quizzes-slice';
import { useAppDispatch, useAppSelector } from 'store';

interface ParamTypes {
  id: string;
}
const useQuiz = () => {
  const dispatch = useAppDispatch();
  const quiz = useAppSelector(selectQuiz);
  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    dispatch(getCurrentQuiz(id));
  }, [dispatch, id]);

  return quiz;
};

export default useQuiz;
