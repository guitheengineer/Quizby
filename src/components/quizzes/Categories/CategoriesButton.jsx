import React from 'react';
import PropTypes from 'prop-types';

function CategoriesButton({ title }) {
  return (
    <button type="button">
      <span>{title}</span>
    </button>
  );
}

CategoriesButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CategoriesButton;
