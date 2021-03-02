import React from 'react';
import './quiz-demo.scss';

import { useAppDispatch, useAppSelector } from 'store';
import { selectDemoReducer, setDemoAnswer } from 'slices/demo-slice';
import DemoResult from './DemoResult';

type Props = {
  style?: {};
};

const QuizDemo = ({ style }: Props) => {
  const { possibleAnswers, userAnswer, question } = useAppSelector(
    selectDemoReducer
  );

  const dispatch = useAppDispatch();

  return (
    <div style={style} className="Quiz-demo">
      <div
        className="Quiz-demo__container"
        style={{ zIndex: userAnswer ? -2 : 1 }}
      >
        <h3 className="Quiz-demo__heading">{question}</h3>
        <ul className="Quiz-demo__list">
          {possibleAnswers.map((possibleAnswer) => (
            <li
              key={possibleAnswer}
              onClick={() => dispatch(setDemoAnswer(possibleAnswer))}
              className="Quiz-demo__item"
            >
              <span className="Quiz-demo__span">{possibleAnswer}</span>
            </li>
          ))}
        </ul>
      </div>
      <DemoResult />
    </div>
  );
};

export default QuizDemo;
