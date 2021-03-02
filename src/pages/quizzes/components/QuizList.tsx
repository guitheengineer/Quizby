import React from 'react';
import { useAppSelector } from '../../../store';
import { QuizClient } from '../../../types';
import ButtonQuiz from './ButtonQuiz';

type Props = {
  type: 'mostPlayed' | 'quizzesSearchedData' | 'recommended' | 'category';
  label?: string;
  className?: string;
};

const QuizList = ({ type, label, className = '' }: Props) => {
  const quizData = useAppSelector((state) => state.quizzes.quizzes[type]);

  return (
    <div className={`Quizzes__list ${className}`}>
      <span>{label}</span>
      <div className="Quizzes__list-container">
        {quizData.length > 0
          ? quizData.map((quiz: QuizClient) => (
              <ButtonQuiz
                titleClassName="Quizzes__title"
                key={quiz._id}
                quiz={quiz}
              />
            ))
          : [...Array(4)].map((_, i) => <ButtonQuiz key={i} />)}
      </div>
    </div>
  );
};

export default QuizList;
