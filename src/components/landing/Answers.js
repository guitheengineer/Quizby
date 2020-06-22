import React, { useEffect } from "react";
import { useState } from "react";
import { setUserAnswer } from "../../slices/rootSlice";
import { useSelector, useDispatch } from "react-redux";

function Answers() {
  const data = useSelector((d) => d.rootReducer);
  const dispatch = useDispatch();
  function optionClicked(e, index) {
    dispatch(setUserAnswer({ e, index }));
  }
  function getBackgroundColor(ans) {
    console.log(ans);
    if (data.userAnswer === data.answer && data.answer === ans)
      return { backgroundColor: "#5255ca", color: "white" };

    if (data.userAnswer !== data.answer && data.userAnswer === ans)
      return {
        backgroundColor: "initial",
        border: "2px solid #f00",
      };
  }
  return (
    <ul
      style={
        data.question.length <= 30
          ? { marginTop: "4.4vh" }
          : { marginTop: "1.4vh" }
      }
      className="App__container--list"
    >
      {data.possibleAnswers.map((ans, index) => (
        <li
          key={index}
          onClick={(e) => optionClicked(e.target.textContent, index)}
          style={getBackgroundColor(ans)}
          className="App__container--list--answer"
        >
          <span>{ans}</span>
          <img
            alt=""
            className="App__container--list--chevron"
            src="./chevron.png"
          />
        </li>
      ))}
    </ul>
  );
}

export default Answers;
