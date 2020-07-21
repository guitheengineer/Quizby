import React, { useEffect } from "react";
import { useState } from "react";
import { setUserAnswer, nextQuestion } from "../../slices/quizzesSlice";
import { useSelector, useDispatch } from "react-redux";
import { isMobile } from "react-device-detect";

function Answers() {
  const [isHover, setIsHover] = useState({ hovering: true, ans: null });
  const {
    currentQuiz,
    currentQuestion,
    currentAnswers,
    userAnswer,
    currentQuestionAnswered,
  } = useSelector((d) => d.quizzesReducer);

  console.log(currentQuestionAnswered);
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

    if (isHover.hovering && ans === isHover.ans) {
      return { border: "2px solid #7b61ff", cursor: "pointer" };
    }
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
      onAnimationEnd={(e) => {
        if (currentQuestionAnswered) {
          dispatch(nextQuestion());
        }
      }}
      style={{ userSelect: "none" }}
      className="App__container--list"
    >
      {currentAnswers.map((ans, index) => (
        <div
          key={index}
          onMouseEnter={() => !isMobile && setIsHover({ hovering: true, ans })}
          onMouseLeave={() => !isMobile && setIsHover({ hovering: false, ans })}
          style={{ position: "relative", width: "100%" }}
          onClick={(e) => {
            optionClicked(ans);
          }}
          className={currentQuestionAnswered ? "slideOutLeft" : "slideInRight"}
        >
          <input
            disabled={currentQuestionAnswered}
            type="button"
            value={ans}
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
