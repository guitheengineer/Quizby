import React from 'react';
import AnswerAnimation from './components/AnswerAnimation';
import Game from './components/Game';
import useQuiz from '../hooks/useQuiz';
import './playing.scss';
import { useAppSelector } from '../../store';
import { selectQuizReducer } from '../../slices/quizzes-slice';

const Playing = () => {
  useQuiz();
  const { currentQuestionAnswered } = useAppSelector(selectQuizReducer);
  return (
    <>
      <Game />
      {currentQuestionAnswered ? <AnswerAnimation /> : null}
    </>
  );
};

export default Playing;
