import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function CategoriesButton({ title }) {
  const history = useHistory();
  function buttonClicked() {
    history.push(`/quizzes/category/${title.toLowerCase()}`);
  }
  return (
    <button onClick={buttonClicked} type="button">
      <span>{title}</span>
    </button>
  );
}

CategoriesButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CategoriesButton;
