import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../slices/quizzesSlice';
import { getCurrentQuiz } from '../../asyncActions';

function ButtonQuiz({ quiz, className, maxLength }) {
  const history = useHistory();
  const dispatch = useDispatch();

  function quizClicked() {
    history.push(`/quizzes/show/${quiz._id}`);
    dispatch(getCurrentQuiz(quiz._id));
    dispatch(setQuery(''));
  }
  function getQuizBackground() {
    if (quiz.image) {
      return {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.27), rgba(0, 0, 0, 0.27)), url('data:${quiz.image.contentType};base64,${quiz.image.data}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      };
    }
    return null;
  }

  return quiz ? (
    <button
      className={className}
      style={getQuizBackground()}
      type="button"
      onClick={quizClicked}
    >
      <span>{`${quiz.name.slice(0, maxLength)}...`}</span>
    </button>
  ) : null;
}

ButtonQuiz.propTypes = {
  quiz: PropTypes.shape({
    name: PropTypes.string,
    _id: PropTypes.string,
    image: PropTypes.object,
  }).isRequired,
  className: PropTypes.string,
  maxLength: PropTypes.number,
};

ButtonQuiz.defaultProps = {
  className: '',
  maxLength: 40,
};

export default ButtonQuiz;
