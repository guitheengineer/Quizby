import React, { MouseEvent } from 'react';
import { useAppDispatch } from 'store';
import fetchError from 'assets/error-images/fetch-error.png';

type Props = {
  fetch: any;
};

const FetchError = ({ fetch }: Props) => {
  const dispatch = useAppDispatch();
  const errorClicked = () => {
    dispatch(fetch());
  };
  return (
    <div className="App__fetcherror">
      <img className="App__fetcherror--illustration" alt="" src={fetchError} />
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

export default FetchError;
