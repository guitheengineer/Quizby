import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { sendForm } from '../../asyncActions';
import { selectManipulateReducer } from '../../slices/manipulateSlice';
import { selectUserReducer } from '../../slices/userSlice';

function ButtonSaveQuiz({ title }) {
  const dispatch = useDispatch();
  const { name, description, creationQuizzes } = useSelector(
    selectManipulateReducer
  );
  const { id } = useSelector(selectUserReducer);

  function saveQuiz() {
    dispatch(sendForm({ id, name, description, creationQuizzes }));
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
      {/* <ClipLoader
          loading={loginState === 'loading'}
          size="14px"
          color="white"
          css={`
            margin-left: 5px;
          `}
        /> */}
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
