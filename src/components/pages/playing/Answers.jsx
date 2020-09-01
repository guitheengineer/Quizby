import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isMobile } from 'react-device-detect';
import {
  setUserAnswer,
  nextQuestion,
  selectQuizReducer,
} from '../../../slices/quizzes-slice';

const Answers = () => {
  const [isHover, setIsHover] = useState({ hovering: true, ans: null });
  const {
    currentQuiz,
    currentQuestion,
    currentAnswers,
    userAnswer,
    currentQuestionAnswered,
  } = useSelector(selectQuizReducer);

  const dispatch = useDispatch();
  function optionClicked(e) {
    dispatch(setUserAnswer(e));
  }
  function getBackgroundColor(clickedAnswer) {
    const { answer } = currentQuiz.questions[currentQuestion];

    if (userAnswer === answer && clickedAnswer === answer) {
      return { backgroundColor: '#5255ca', color: 'white' };
    }

    if (userAnswer !== answer && userAnswer === clickedAnswer) {
      return {
        backgroundColor: 'initial',
        border: '2px solid #f00',
      };
    }

    if (isHover.hovering && clickedAnswer === isHover.ans) {
      return { border: '2px solid #7b61ff', cursor: 'pointer' };
    }
    return null;
  }

  return (
    <div
      onAnimationEnd={() => {
        if (currentQuestionAnswered) {
          dispatch(nextQuestion());
        }
      }}
      style={{ userSelect: 'none' }}
      className="App__playing--list"
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
              ? 'App__playing--list--answer slideOutLeft'
              : 'App__playing--list--answer slideInRight'
          }
        >
          {ans}
          <img
            alt=""
            className="App__playing--list--chevron"
            src="../../../chevron.png"
          />
        </button>
      ))}
    </div>
  );
};

export default Answers;
