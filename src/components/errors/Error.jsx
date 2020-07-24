import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../asyncActions';

function Error() {
  const dispatch = useDispatch();
  function errorClicked() {
    dispatch(fetchData());
  }
  return (
    <div className="App__error">
      <img className="App__error--illustration" alt="" src="./errorfetch" />
      <p className="App__error--message">An error ocurred</p>
      <button
        type="button"
        onClick={errorClicked}
        className="App__fourhundred--button"
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
