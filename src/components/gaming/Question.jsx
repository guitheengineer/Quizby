import React from 'react';
import { useSelector } from 'react-redux';

function Question() {
  const { currentQuiz, currentQuestion, currentQuestionAnswered } = useSelector(
    (d) => d.quizzesReducer
  );
  function questionTitleStyle() {
    const questionLength =
      currentQuiz.questions[currentQuestion].question.length;
    if (questionLength <= 25) {
      return { marginBottom: '1rem', fontSize: 'clamp(2rem, 6vw, 2.4rem)' };
    }
    return null;
  }
  return (
    <div
      style={questionTitleStyle()}
      className={`App__playing--question ${
        currentQuestionAnswered
          ? 'slideOutLeftQuestion'
          : 'slideInRightQuestion'
      }`}
    >
      <span
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          fontSize: '18px',
        }}
      />
      <span className="App__playing--question--bf">-</span>
      {currentQuiz.questions[currentQuestion].question}
    </div>
  );
}

export default Question;
