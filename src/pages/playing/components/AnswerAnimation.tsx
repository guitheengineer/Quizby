import React from 'react';
import { useAppSelector } from 'store';
import { selectQuizReducer } from 'slices/quizzes-slice';
import correct from 'assets/icons/correct.svg';
import wrong from 'assets/icons/wrong.svg';
import './answer-animation.scss';

const AnswerAnimation = () => {
  const { userAnsweredCorrect } = useAppSelector(selectQuizReducer);

  return userAnsweredCorrect ? (
    <img src={correct} className="Answer-animation" alt="Correct answer" />
  ) : (
    <img src={wrong} className="Answer-animation" alt="Wrong answer" />
  );
};

export default AnswerAnimation;
