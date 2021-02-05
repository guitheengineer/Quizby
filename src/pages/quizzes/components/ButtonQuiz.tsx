import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentQuiz, setQuery } from '../../../slices/quizzes-slice';
import { QuizClient } from '../../../types';
import './button-quiz.scss';

type Props = {
  quiz: QuizClient;
  className?: string;
  titleClassName?: string;
};

const ButtonQuiz = ({ quiz, className = '', titleClassName = '' }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const quizClicked = () => {
    if (quiz.name && quiz._id) {
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
  }, [quiz && quiz.image]);

  return quiz ? (
    <button
      className={`Button-quiz ${className}`}
      style={getQuizBackground()}
      type="button"
      onClick={quizClicked}
    >
      <span className={`Button-quiz__title ${titleClassName}`}>
        {quiz.name}
      </span>
    </button>
  ) : (
    <button type="button" disabled className="Button-quiz"></button>
  );
};

export default ButtonQuiz;
