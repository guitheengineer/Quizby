import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../slices/quizzesSlice';
import { getCurrentQuiz } from '../../asyncActions';
import sliceName from '../../appUtils/sliceName';

const ButtonQuiz = ({ quiz, className, maxLength }) => {
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
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('data:${quiz.image.contentType};base64,${quiz.image.data}')`,
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
      <span>{sliceName(quiz.name, maxLength)}</span>
    </button>
  ) : null;
};

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
  maxLength: 28,
};

export default ButtonQuiz;
