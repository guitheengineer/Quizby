import React from 'react';
import { selectQuizReducer } from 'slices/quizzes-slice';
import { useAppSelector } from 'store';

const Question = () => {
  const {
    currentQuiz,
    currentQuestion,
    currentQuestionAnswered,
  } = useAppSelector(selectQuizReducer);
  const { question } = currentQuiz.questions[currentQuestion];
  return (
    <div
      style={
        question.length <= 25
          ? {
              marginBottom: '1rem',
              fontSize: 'clamp(2rem, 6vw, 2.4rem)',
            }
          : undefined
      }
      className={`App__playing--question ${
        currentQuestionAnswered
          ? 'slideOutLeftQuestion'
          : 'slideInRightQuestion'
      }`}
    >
      <span className="App__playing--question--bf">-</span>
      {question}
    </div>
  );
};

export default Question;
