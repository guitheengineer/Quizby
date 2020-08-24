import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, selectQuizReducer } from '../../slices/quizzesSlice';
import { getCurrentQuiz, deleteQuiz, getUserQuizzes } from '../../asyncActions';
import { setEditQuiz } from '../../slices/manipulateSlice';

function ButtonQuizPermission({ quiz, maxLength, username }) {
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
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.27), rgba(0, 0, 0, 0.27)), url('data:${quiz.image.contentType};base64,${quiz.image.data}')`,
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

    // this function will get all quiz data and set to manipulateReducer, also changing the link to editqqiz
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
        <span>{`${quiz.name.slice(0, maxLength)}...`}</span>
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
}

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
