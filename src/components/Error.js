import React from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../asyncActions/fetchQuestions";

function Error() {
  const dispatch = useDispatch();
  function errorClicked() {
    dispatch(fetchData());
  }
  return (
    <div className="App__error">
      <div className="App__error--icon" onClick={errorClicked}></div>
      <p className="App__error--message">An error has occurred</p>
    </div>
  );
}

export default Error;
