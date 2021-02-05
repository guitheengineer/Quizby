import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { quizzesAdded, selectQuizReducer } from '../../../slices/quizzes-slice';
import { useAppSelector } from '../../../store';
import './landing-quizzes.scss';
import LandingQuiz from './LandingQuiz';

const LandingQuizzes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(quizzesAdded());
  }, []);

  const {
    quizzes: { mostPlayed },
  } = useAppSelector(selectQuizReducer);

  return (
    <div className="Landing-quizzes">
      <LandingQuiz quiz={mostPlayed[0]} />
      <LandingQuiz quiz={mostPlayed[1]} />
    </div>
  );
};

export default LandingQuizzes;
