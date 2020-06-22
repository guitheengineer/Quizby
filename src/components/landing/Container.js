import React from "react";
import Answers from "./Answers";
import Question from "./Question";
// import Infocounter from "./Infocounter";
import { useSelector, useDispatch } from "react-redux";

function Container() {
  return (
    <div className="App__container">
      <Question />
      <Answers />
    </div>
  );
}

export default Container;
