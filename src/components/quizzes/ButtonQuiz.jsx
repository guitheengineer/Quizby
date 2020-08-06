import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../slices/quizzesSlice';

function ButtonQuiz({ quiz }) {
  const history = useHistory();
  const dispatch = useDispatch();

  function quizClicked() {
    history.push(`/quizzes/play/${quiz._id}`);
    dispatch(setQuery(''));
  }

  return (
    <button type="button" onClick={quizClicked}>
      <span>{quiz.name}</span>
    </button>
  );
}

ButtonQuiz.propTypes = {
  quiz: PropTypes.exact({
    creator: PropTypes.string,
    creatorName: PropTypes.string,
    name: PropTypes.string,
    questions: PropTypes.array,
    timesPlayed: PropTypes.number,
    __v: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};

export default ButtonQuiz;
