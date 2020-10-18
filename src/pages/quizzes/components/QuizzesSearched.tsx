import React from 'react';
import { useAppSelector } from 'store';
import { QuizClient } from 'types';
import ButtonQuiz from './ButtonQuiz';

const QuizzesSearched = () => {
  const { quizzesSearchedData } = useAppSelector(
    (state) => state.quizzes.quizzes
  );

  return (
    <div className="Quizzes__sectiontwo Quizzes__searched">
      <div>
        {quizzesSearchedData.map((quiz: QuizClient) => (
          <ButtonQuiz key={quiz._id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default QuizzesSearched;
