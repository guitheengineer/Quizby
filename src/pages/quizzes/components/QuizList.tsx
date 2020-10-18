import React from 'react';
import { useAppSelector } from 'store';
import { QuizClient } from 'types';
import ButtonQuiz from './ButtonQuiz';

type Props = {
  type: 'mostPlayed' | 'quizzesSearchedData' | 'recommended' | 'category';
  label?: string;
  className?: string;
};

const QuizList = ({ type, label, className }: Props) => {
  const quizData = useAppSelector((state) => state.quizzes.quizzes[type]);

  return (
    <div className={`Quizzes__sectiontwo ${className}`}>
      <span>{label}</span>
      <div>
        {quizData.map((quiz: QuizClient) => (
          <ButtonQuiz key={quiz._id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default QuizList;
