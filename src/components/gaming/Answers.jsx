import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { isMobile } from 'react-device-detect';
import { setUserAnswer, nextQuestion } from '../../slices/quizzesSlice';

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
    const { answer } = currentQuiz.questions[currentQuestion];

    if (userAnswer === answer && ans === answer) {
      return { backgroundColor: '#5255ca', color: 'white' };
    }

    if (userAnswer !== answer && userAnswer === ans) {
      return {
        backgroundColor: 'initial',
        border: '2px solid #f00',
      };
    }

    if (isHover.hovering && ans === isHover.ans) {
      return { border: '2px solid #7b61ff', cursor: 'pointer' };
    }
    return null;
  }

  // function getContainerStyle() {
  //   const { length } = currentQuiz.questions[currentQuestion].question;

  //   if (currentQuestionAnswered) {
  //     return { userSelect: 'none', pointerEvents: 'none' };
  //   }
  //   if (length <= 30) {
  //     return { marginTop: '4.4vh' };
  //   }
  //   return { marginTop: '1.4vh' };
  // }

  return (
    <div
      onAnimationEnd={() => {
        if (currentQuestionAnswered) {
          dispatch(nextQuestion());
        }
      }}
      style={{ userSelect: 'none' }}
      className="App__container--list"
    >
      {currentAnswers.map((ans) => (
        <button
          type="button"
          disabled={currentQuestionAnswered}
          key={ans}
          onMouseEnter={() => !isMobile && setIsHover({ hovering: true, ans })}
          onMouseLeave={() => !isMobile && setIsHover({ hovering: false, ans })}
          style={getBackgroundColor(ans)}
          onClick={() => optionClicked(ans)}
          className={
            currentQuestionAnswered
              ? 'App__container--list--answer slideOutLeft'
              : 'App__container--list--answer slideInRight'
          }
        >
          {ans}
          <img
            alt=""
            className="App__container--list--chevron"
            src="../../../chevron.png"
          />
        </button>
      ))}
    </div>
  );
}

export default Answers;
