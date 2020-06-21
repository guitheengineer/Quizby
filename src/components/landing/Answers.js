import React, { useEffect } from "react";
import { useState } from "react";
import { setUserAnswer } from "../../slices/rootSlice";

function Answers({ data, dispatch }) {
  function optionClicked(e, index) {
    dispatch(setUserAnswer({ e, index }));
  }
  return (
    <ul className="App__container--list">
      {data.possibleAnswers.map((ans, index) => (
        <li
          key={index}
          onClick={(e) => optionClicked(e.target.textContent, index)}
          style={
            data.userAnswer === ans
              ? { backgroundColor: "#5255ca", color: "white" }
              : { backgroundColor: "initial" }
          }
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
