import React from 'react';
import PropTypes from 'prop-types';

function Button({ title }) {
  return (
    <button
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

Button.propTypes = {
  title: PropTypes.string,
};

Button.defaultProps = {
  title: 'Confirm',
};

export default Button;
