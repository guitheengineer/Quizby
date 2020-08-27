import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const CategoriesButton = ({ title }) => {
  const history = useHistory();
  function buttonClicked() {
    history.push(`/quizzes/category/${title.toLowerCase()}`);
  }
  console.log(title);
  return (
    <button
      style={{
        backgroundImage: `url('./category-images/${title.toLowerCase()}.png')`,
      }}
      onClick={buttonClicked}
      type="button"
    >
      <span>{title}</span>
    </button>
  );
};

CategoriesButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CategoriesButton;
