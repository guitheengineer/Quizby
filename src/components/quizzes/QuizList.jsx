import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ButtonQuiz from './ButtonQuiz';

function QuizList({ type, label }) {
  const quizData = useSelector((state) => state.quizzesReducer.quizzes[type]);

  return (
    <div className="Quizzes__sectiontwo Quizzes__sectiontwo--show">
      <span>{label}</span>
      <div>
        {quizData.map((quiz) => (
          <ButtonQuiz key={quiz._id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}

QuizList.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
};

QuizList.defaultProps = {
  label: '',
};

export default QuizList;
