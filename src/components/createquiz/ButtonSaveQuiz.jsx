import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDispatch, useSelector } from 'react-redux';
import { sendForm } from '../../asyncActions';
import { selectManipulateReducer } from '../../slices/manipulateSlice';
import { selectUserReducer } from '../../slices/userSlice';

function ButtonSaveQuiz({ title }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    name,
    description,
    creationQuizzes,
    image,
    category,
    saveQuizFetchState,
    id: quizId,
  } = useSelector(selectManipulateReducer);
  const { id, username } = useSelector(selectUserReducer);

  useEffect(() => {
    if (saveQuizFetchState === 'fulfilled') {
      history.push(`/quizzes/show/${quizId}`);
    }
  }, [saveQuizFetchState]);
  function saveQuiz() {
    dispatch(
      sendForm({
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
      className="App__form--button"
      type="submit"
      style={{
        marginTop: '3.5rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>{title}</span>
      <ClipLoader
        loading={saveQuizFetchState === 'loading'}
        size="14px"
        color="white"
        css={`
          margin-left: 5px;
        `}
      />
    </button>
  );
}

ButtonSaveQuiz.propTypes = {
  title: PropTypes.string,
};

ButtonSaveQuiz.defaultProps = {
  title: 'Confirm',
};

export default ButtonSaveQuiz;
