import React, { useEffect } from "react";
import { useState } from "react";
import { setUserAnswer, nextQuestion } from "../../slices/quizzesSlice";
import { useSelector, useDispatch } from "react-redux";

function Answers() {
  const {
    currentQuiz,
    currentQuestion,
    currentAnswers,
    userAnswer,
    currentQuestionAnswered,
  } = useSelector((d) => d.quizzesReducer);

  const dispatch = useDispatch();
  function optionClicked(e) {
    dispatch(setUserAnswer(e));
  }
  function getBackgroundColor(ans) {
    let answer = currentQuiz.questions[currentQuestion].answer;

    if (userAnswer === answer && ans === answer)
      return { backgroundColor: "#5255ca", color: "white" };

    if (userAnswer !== answer && userAnswer === ans)
      return {
        backgroundColor: "initial",
        border: "2px solid #f00",
      };
  }

  function getContainerStyle() {
    let length = currentQuiz.questions[currentQuestion].question.length;

    if (currentQuestionAnswered) {
      return { userSelect: "none", pointerEvents: "none" };
    }
    // if (length <= 30) {
    //   return { marginTop: "4.4vh" };
    // }
    // else {
    //   return { marginTop: "1.4vh" };
    // }
  }

  return (
    <form
      onAnimationStart={(e) => {
        if (currentQuestionAnswered) {
          console.log("ended");
          dispatch(nextQuestion());
        }
      }}
      style={getContainerStyle()}
      className={`App__container--list ${
        currentQuestionAnswered ? "slideOutLeft" : "slideInRight"
      }`}
    >
      {currentAnswers.map((ans, index) => (
        <div key={index} style={{ position: "relative", width: "100%" }}>
          <input
            disabled={currentQuestionAnswered}
            type="button"
            value={ans}
            onClick={(e) => {
              optionClicked(e.target.value);
            }}
            style={getBackgroundColor(ans)}
            className="App__container--list--answer"
          />
          <img
            alt=""
            className="App__container--list--chevron"
            src="../../../chevron.png"
          />
        </div>
      ))}
    </form>
  );
}

export default Answers;
