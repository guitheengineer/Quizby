import React, { useCallback } from 'react';
import './answers.scss';
import {
  selectQuizReducer,
  setUserAnswer,
  nextQuestion,
} from '../../../slices/quizzes-slice';
import { useAppSelector, useAppDispatch } from '../../../store';
import chevron from '../../../assets/icons/chevron.png';

const Answers = () => {
  const dispatch = useAppDispatch();
  const {
    currentQuiz,
    currentQuestion,
    currentAnswers,
    userAnswer,
    currentQuestionAnswered,
  } = useAppSelector(selectQuizReducer);

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
    },
    [userAnswer, currentQuiz.questions, currentQuestion]
  );

  return (
    <div
      onAnimationEnd={() => {
        if (currentQuestionAnswered) {
          dispatch(nextQuestion());
        }
      }}
      className="Answers__list"
    >
      {currentAnswers.map((ans) => (
        <button
          type="button"
          disabled={currentQuestionAnswered}
          key={ans}
          style={getBackgroundColor(ans)}
          onClick={() => dispatch(setUserAnswer(ans))}
          className={
            currentQuestionAnswered
              ? 'Answers__answer slideOutLeft'
              : 'Answers__answer slideInRight'
          }
        >
          {ans}
          <img alt="" className="Answers__chevron" src={chevron} />
        </button>
      ))}
    </div>
  );
};

export default Answers;
