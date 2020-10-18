import React from 'react';
import { useAppSelector } from 'store';
import ButtonQuiz from './ButtonQuiz';

const Recommended = () => {
  const recommended = useAppSelector(
    (state) => state.quizzes.quizzes.recommended
  );
  return (
    <div className="Quizzes__recommended">
      <span>Recommended</span>
      <ButtonQuiz maxLength={40} quiz={recommended} />
    </div>
  );
};

export default Recommended;
