import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextFieldCommon from '../textfields/TextFieldCommon';
import {
  selectManipulateReducer,
  removeCreatedQuiz,
} from '../../slices/manipulateSlice';

function CreateQuestions() {
  const { creationQuizzes } = useSelector(selectManipulateReducer);
  const dispatch = useDispatch();
  function close(i) {
    dispatch(removeCreatedQuiz(i));
  }
  return (
    <>
      <h6 className="Create-quiz__title Create-quiz__title--questions">
        Questions
      </h6>
      {creationQuizzes.map((quiz, i) => (
        <fieldset key={quiz.id} className="Create-quiz__quiz-creation">
          <legend className="Create-quiz__quiz-legend">Quiz {i + 1}</legend>
          <button
            type="button"
            onClick={() => close(quiz.id)}
            aria-label="Close quiz"
            className="Create-quiz__close"
          />
          <TextFieldCommon
            type="question"
            label="Question"
            multiline
            required
            id={quiz.id}
          />
          <TextFieldCommon
            type="fakeAnswer1"
            label="Fake Answer"
            multiline
            required
            style={{ marginTop: '1.6rem' }}
            id={quiz.id}
          />
          <TextFieldCommon
            type="fakeAnswer2"
            label="Fake Answer"
            multiline
            required
            style={{ marginTop: '1.6rem' }}
            id={quiz.id}
          />
          <TextFieldCommon
            type="answer"
            label="Real Answer"
            multiline
            required
            style={{ marginTop: '1.6rem' }}
            id={quiz.id}
          />
        </fieldset>
      ))}
    </>
  );
}

export default CreateQuestions;
