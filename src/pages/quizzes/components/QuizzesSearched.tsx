import React from 'react';
import { useAppSelector } from '../../../store';
import { QuizClient } from '../../../types';
import ButtonQuiz from './ButtonQuiz';

const QuizzesSearched = () => {
  const {
    quizzes: { quizzesSearchedData },
    quizSearchFetchState,
  } = useAppSelector((state) => state.quizzes);
  return (
    <div className="Quizzes__searched">
      {quizzesSearchedData.map((quiz: QuizClient) => (
        <ButtonQuiz key={quiz._id} quiz={quiz} />
      ))}
      <div className="Quizzes__not-found">
        {quizSearchFetchState === 'fulfilled' && !quizzesSearchedData.length
          ? 'No quiz was found'
          : null}
      </div>
    </div>
  );
};

export default QuizzesSearched;
