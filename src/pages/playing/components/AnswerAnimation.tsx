import React from 'react';
import { useAppSelector } from '../../../store';
import { selectQuizReducer } from '../../../slices/quizzes-slice';
import { useHistory } from 'react-router-dom';
import correct from '../../../assets/icons/correct.svg';
import wrong from '../../../assets/icons/wrong.svg';
import './answer-animation.scss';

const AnswerAnimation = () => {
  const { userAnsweredCorrect, userStats, currentQuiz } = useAppSelector(
    selectQuizReducer
  );
  const history = useHistory();

  const animationEnd = () => {
    if (userStats.done) {
      setTimeout(() => {
        history.push(`/quizzes/done/${currentQuiz._id}`);
      }, 1200);
    }
  };

  return userAnsweredCorrect ? (
    <img
      onAnimationEnd={animationEnd}
      src={correct}
      className="Answer-animation"
      alt="Correct answer"
    />
  ) : (
    <img
      onAnimationEnd={animationEnd}
      src={wrong}
      className="Answer-animation"
      alt="Wrong answer"
    />
  );
};

export default AnswerAnimation;
