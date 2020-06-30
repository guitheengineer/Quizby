import React from "react";
import Answers from "./Answers";
import Question from "./Question";
// import Infocounter from "./Infocounter";
import { useSelector, useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";

function Container() {
  const dataIsFetched = useSelector((d) => d.rootReducer.dataIsFetched);
  return (
    <div className="App__container">
      <ClipLoader loading={dataIsFetched === "loading"} color="#5255CA" />
      <Question />
      <Answers />
    </div>
  );
}

export default Container;
