import React from 'react';
import { useAppSelector } from 'store';
import { selectQuizReducer } from 'slices/quizzes-slice';
import { useHistory } from 'react-router-dom';
import correct from 'assets/icons/correct.svg';
import wrong from 'assets/icons/wrong.svg';

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
      className="App__playing--correct"
      alt="Correct answer"
    />
  ) : (
    <img
      onAnimationEnd={animationEnd}
      src={wrong}
      className="App__playing--correct"
      alt="Wrong answer"
    />
  );
};

export default AnswerAnimation;
