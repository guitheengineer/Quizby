import React from 'react';
import PropTypes from 'prop-types';
import ButtonQuiz from './ButtonQuiz';

const Recommended = ({ recommended }) => (
  <div className="Quizzes__recommended">
    <span>Recommended</span>
    <ButtonQuiz maxLength={40} quiz={recommended} />
  </div>
);

Recommended.propTypes = {
  recommended: PropTypes.object.isRequired,
};

export default Recommended;
