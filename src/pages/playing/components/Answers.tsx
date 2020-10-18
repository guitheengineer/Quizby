import React, { useState, MouseEvent, useCallback } from 'react';
import { isMobile } from 'react-device-detect';
import {
  selectQuizReducer,
  setUserAnswer,
  nextQuestion,
} from 'slices/quizzes-slice';
import { useAppSelector, useAppDispatch } from 'store';
import chevron from 'assets/icons/chevron.png';

const Answers = () => {
  const dispatch = useAppDispatch();
  const [isHover, setIsHover] = useState({ hovering: true, ans: null });
  const {
    currentQuiz,
    currentQuestion,
    currentAnswers,
    userAnswer,
    currentQuestionAnswered,
  } = useAppSelector(selectQuizReducer);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(setUserAnswer(e.currentTarget.value));
  };
  const getBackgroundColor = useCallback(
    (clickedAnswer) => {
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
    },
    [userAnswer]
  );

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
          onClick={() => handleClick(ans)}
          className={
            currentQuestionAnswered
              ? 'App__playing--list--answer slideOutLeft'
              : 'App__playing--list--answer slideInRight'
          }
        >
          {ans}
          <img alt="" className="App__playing--list--chevron" src={chevron} />
        </button>
      ))}
    </div>
  );
};

export default Answers;
