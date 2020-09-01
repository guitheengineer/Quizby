import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectManipulateReducer,
  quizSaved,
} from '../../slices/manipulate-slice';
import { selectUserReducer } from '../../slices/user-slice';

const ButtonSaveQuiz = ({ title, functionType, loadingState }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    name,
    description,
    creationQuizzes,
    image,
    category,
    id: quizId,
  } = useSelector(selectManipulateReducer);
  const { id, username } = useSelector(selectUserReducer);

  useEffect(() => {
    if (loadingState === 'fulfilled') {
      history.push(`/quizzes/show/${quizId}`);
      dispatch(quizSaved());
    }
  }, [loadingState]);

  function saveQuiz() {
    dispatch(
      functionType({
        quizId,
        id,
        image,
        username,
        name,
        description,
        category,
        creationQuizzes,
      })
    );
  }

  return (
    <button
      onClick={saveQuiz}
      className="button button--save-quiz"
      type="submit"
    >
      <span>{title}</span>
      <ClipLoader
        loading={loadingState === 'pending'}
        size="14px"
        color="white"
        css={`
          margin-left: 5px;
        `}
      />
    </button>
  );
};

ButtonSaveQuiz.propTypes = {
  title: PropTypes.string,
  functionType: PropTypes.func.isRequired,
  loadingState: PropTypes.string.isRequired,
};

ButtonSaveQuiz.defaultProps = {
  title: 'Confirm',
};

export default ButtonSaveQuiz;
