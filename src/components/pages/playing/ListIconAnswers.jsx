import React from 'react';
import { useSelector } from 'react-redux';
import { selectQuizReducer } from '../../../slices/quizzes-slice';

const ListAnswers = () => {
  const { historicOfAnswers } = useSelector(selectQuizReducer);
  return (
    <ul className="App__listiconanswers">
      {historicOfAnswers.map((answers, i) =>
        answers === 'correct' ? (
          <li key={i} className="App__listanswers--item">
            <img src="../../rightanswericon.svg" alt="correct" />
          </li>
        ) : (
          <li key={i} className="App__listanswers--item">
            <img src="../../wronganswericon.svg" alt="wrong" />
          </li>
        )
      )}
    </ul>
  );
};

export default ListAnswers;
