import React from 'react';
import './icon-answers.scss';
import { useAppSelector } from '../../../store';
import { selectQuizReducer } from '../../../slices/quizzes-slice';
import rightAnswer from '../../../assets/icons/right-answer.svg';
import wrongAnswer from '../../../assets/icons/wrong-answer.svg';

const IconAnswers = () => {
  const { historicOfAnswers } = useAppSelector(selectQuizReducer);
  return (
    <ul className="Icon-answers">
      {historicOfAnswers.map((answers, i) =>
        answers === 'correct' ? (
          <li key={i} className="Icon-answers__item">
            <img
              className="Icon-answers__img"
              src={rightAnswer}
              alt="correct"
            />
          </li>
        ) : (
          <li key={i} className="Icon-answers__item">
            <img className="Icon-answers__item" src={wrongAnswer} alt="wrong" />
          </li>
        )
      )}
    </ul>
  );
};

export default IconAnswers;
