import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ButtonQuiz from './ButtonQuiz';

const QuizList = ({ type, label, className }) => {
  const quizData = useSelector((state) => state.quizzesReducer.quizzes[type]);

  return (
    <div className={`Quizzes__sectiontwo ${className}`}>
      <span>{label}</span>
      <div>
        {quizData.map((quiz) => (
          <ButtonQuiz key={quiz._id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

QuizList.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

QuizList.defaultProps = {
  label: '',
  className: '',
};

export default QuizList;
