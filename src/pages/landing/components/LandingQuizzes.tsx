import { useEffect } from 'react';
import { quizzesAdded } from 'slices/quizzes-slice';
import { useAppDispatch, useAppSelector } from 'store';
import './landing-quizzes.scss';
import LandingQuiz from './LandingQuiz';

const LandingQuizzes = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(quizzesAdded());
  }, [dispatch]);

  const mostPlayed = useAppSelector(
    (state) => state.quizzes.quizzes.mostPlayed
  );

  return (
    <div className="Landing-quizzes">
      <LandingQuiz quiz={mostPlayed[0]} />
      <LandingQuiz quiz={mostPlayed[1]} />
    </div>
  );
};

export default LandingQuizzes;
