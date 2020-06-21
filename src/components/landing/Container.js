import React from "react";
import Answers from "./Answers";
import Question from "./Question";
import Infocounter from "./Infocounter";
import { useSelector, useDispatch } from "react-redux";

function Container() {
  const data = useSelector((data) => data.rootReducer);
  const dispatch = useDispatch();
  return (
    <div className="App__container">
      <Question data={data} dispatch={dispatch} />
      <Answers data={data} dispatch={dispatch} />
    </div>
  );
}

export default Container;
