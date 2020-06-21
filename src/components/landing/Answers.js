import React, { useEffect } from "react";
import { useState } from "react";

function Answers({ data, dispatch }) {
  console.log(data.possibleAnswers);
  const [isClicked, setIsClicked] = useState(false);

  function answerClicked(value, index) {
    console.log(value + " " + index);
    setIsClicked(true);
  }

  return (
    <ul className="App__container--list">
      {data.possibleAnswers.map((ans, index) => (
        <li
          key={index}
          onClick={(e) => answerClicked(e.target.textContent, index)}
          style={
            isClicked
              ? { backgroundColor: "red" }
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
