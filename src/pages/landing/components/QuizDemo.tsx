import React from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { setDemoAnswer, selectDemoReducer } from 'slices/demo-slice';
import DemoResult from './DemoResult';

type Props = {
  style: {};
};

const QuizDemo = ({ style }: Props) => {
  const { possibleAnswers, userAnswer } = useAppSelector(selectDemoReducer);
  const dispatch = useAppDispatch();
  const handleClick = (selectedAnswer: string) => {
    dispatch(setDemoAnswer(selectedAnswer));
  };

  return (
    <div style={style} className="Landing__quiz-demo">
      <div
        className="Landing__quiz-container"
        style={{ zIndex: userAnswer ? -2 : 1 }}
      >
        <h3 className="Landing__quiz-heading">
          Who was the first black president of America?
        </h3>
        <ul className="Landing__quiz-list">
          {possibleAnswers.map((possibleAnswer) => (
            <li
              key={possibleAnswer}
              onClick={() => handleClick(possibleAnswer)}
              className="Landing__quiz-item"
            >
              <span className="Landing__quiz-span">{possibleAnswer}</span>
            </li>
          ))}
        </ul>
      </div>
      <DemoResult />
    </div>
  );
};

export default QuizDemo;
