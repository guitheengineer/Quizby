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
      <button type="button" className="App__error--icon" onClick={errorClicked}>
        <p className="App__error--message">An error has occurred</p>
      </button>
    </div>
  );
}

export default Error;
