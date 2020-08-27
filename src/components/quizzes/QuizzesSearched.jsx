import React from 'react';
import { useSelector } from 'react-redux';
import ButtonQuiz from './ButtonQuiz';

const QuizzesSearched = () => {
  const { quizzesSearchedData } = useSelector(
    (selectorData) => selectorData.quizzesReducer.quizzes
  );

  return (
    <div className="Quizzes__sectiontwo Quizzes__searched">
      <div>
        {quizzesSearchedData.map((quiz) => (
          <ButtonQuiz key={quiz._id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default QuizzesSearched;
