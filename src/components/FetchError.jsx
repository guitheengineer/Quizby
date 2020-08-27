import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const FetchError = ({ fetchFunction }) => {
  const dispatch = useDispatch();
  function errorClicked() {
    dispatch(fetchFunction());
  }
  return (
    <div className="App__fetcherror">
      <img
        className="App__fetcherror--illustration"
        alt=""
        src="./errorfetch.png"
      />
      <p className="App__fetcherror--message">Sorry, an error ocurred</p>
      <button
        type="button"
        onClick={errorClicked}
        className="App__fourhundred--button"
      >
        Try again
      </button>
    </div>
  );
};

FetchError.propTypes = {
  fetchFunction: PropTypes.func.isRequired,
};

export default FetchError;
