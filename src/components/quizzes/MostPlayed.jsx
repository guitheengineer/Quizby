import React from 'react';
import { useSelector } from 'react-redux';
import ButtonQuiz from './ButtonQuiz';

function MostPlayed() {
  const { mostPlayedQuizzes } = useSelector(
    (selectorData) => selectorData.quizzesReducer.quizzes
  );

  return (
    <div className="Quizzes__sectiontwo">
      <span>Most played</span>
      <div>
        {mostPlayedQuizzes.map((quiz) => (
          <ButtonQuiz key={quiz._id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}

export default MostPlayed;
