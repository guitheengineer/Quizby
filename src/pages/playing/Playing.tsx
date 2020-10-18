import React from 'react';
import AnswerAnimation from './components/AnswerAnimation';
import Game from './components/Game';
import useQuiz from '../hooks/useQuiz';

const Playing = () => {
  useQuiz();

  return (
    <>
      <Game />
      <AnswerAnimation />
    </>
  );
};

export default Playing;
