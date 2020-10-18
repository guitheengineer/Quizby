import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentQuiz, setQuery } from 'slices/quizzes-slice';
import sliceName from 'utils/slice-name';
import { QuizClient } from 'types';

type Props = {
  quiz: QuizClient;
  className?: string;
  maxLength?: number;
};

const ButtonQuiz = ({ quiz, className, maxLength = 28 }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const quizClicked = () => {
    if (quiz._id) {
      history.push(`/quizzes/show/${quiz._id}`);
      dispatch(getCurrentQuiz(quiz._id));
    }
    dispatch(setQuery(''));
  };
  const getQuizBackground = useCallback(() => {
    if (quiz.image) {
      return {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('data:${quiz.image.contentType};base64,${quiz.image.data}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      };
    }
  }, [quiz.image]);

  return quiz ? (
    <button
      className={className}
      style={getQuizBackground()}
      type="button"
      onClick={quizClicked}
    >
      <span>{sliceName(quiz.name || '', maxLength)}</span>
    </button>
  ) : null;
};

export default ButtonQuiz;
