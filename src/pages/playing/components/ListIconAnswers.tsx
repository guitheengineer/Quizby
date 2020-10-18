import React from 'react';
import { useAppSelector } from 'store';
import { selectQuizReducer } from 'slices/quizzes-slice';
import rightAnswer from 'assets/icons/right-answer.svg';
import wrongAnswer from 'assets/icons/wrong-answer.svg';

const ListAnswers = () => {
  const { historicOfAnswers } = useAppSelector(selectQuizReducer);
  return (
    <ul className="App__listiconanswers">
      {historicOfAnswers.map((answers, i) =>
        answers === 'correct' ? (
          <li key={i} className="App__listanswers--item">
            <img src={rightAnswer} alt="correct" />
          </li>
        ) : (
          <li key={i} className="App__listanswers--item">
            <img src={wrongAnswer} alt="wrong" />
          </li>
        )
      )}
    </ul>
  );
};

export default ListAnswers;
