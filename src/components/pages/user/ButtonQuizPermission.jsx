import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, selectQuizReducer } from '../../../slices/quizzes-slice';
import {
  getCurrentQuiz,
  deleteQuiz,
  getUserQuizzes,
} from '../../../async-actions';
import { setEditQuiz } from '../../../slices/manipulate-slice';
import sliceName from '../../../appUtils/sliceName';

const ButtonQuizPermission = ({ quiz, maxLength, username }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { deleteQuizFetchState } = useSelector(selectQuizReducer);
  const { _id: quizId } = quiz;
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

  useEffect(() => {
    if (deleteQuizFetchState === 'fulfilled') {
      dispatch(getUserQuizzes(username));
    }
  }, [deleteQuizFetchState]);

  function editClicked() {
    dispatch(setEditQuiz(quiz));
    history.push(`/user/${username}/editquiz`);
  }

  function deleteClicked() {
    dispatch(deleteQuiz({ quizId, username }));
  }

  return (
    <div className="User__item-container">
      <button
        className="User__created-quiz"
        style={getQuizBackground()}
        type="button"
        onClick={quizClicked}
      >
        <span>{sliceName(quiz.name, maxLength)}</span>
      </button>
      <div className="User__action-buttons">
        <button
          type="button"
          className=" User__action-button User__action-button--edit"
          onClick={editClicked}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={deleteClicked}
          className="
              User__action-button User__action-button--delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

ButtonQuizPermission.propTypes = {
  quiz: PropTypes.shape({
    name: PropTypes.string,
    _id: PropTypes.string,
    image: PropTypes.object,
  }).isRequired,
  maxLength: PropTypes.number,
  username: PropTypes.string.isRequired,
};

ButtonQuizPermission.defaultProps = {
  maxLength: 40,
};

export default ButtonQuizPermission;
