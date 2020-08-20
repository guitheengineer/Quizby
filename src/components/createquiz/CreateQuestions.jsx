import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextFieldCommon from './TextFieldCommon';
import {
  selectManipulateReducer,
  removeCreatedQuiz,
} from '../../slices/manipulateSlice';

const commonProps = {
  multiline: true,
  required: true,
  maxLength: 20,
  style: { marginTop: '1.6rem' },
};

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
          <legend className="Create-quiz__quiz-legend">Question {i + 1}</legend>
          <button
            type="button"
            onClick={() => close(quiz.id)}
            aria-label="Close quiz"
            className="Create-quiz__close"
          />
          <TextFieldCommon
            type="question"
            label="Question"
            required
            multiline
            maxLength={140}
            id={quiz.id}
          />
          <TextFieldCommon
            type="fakeAnswer1"
            label="Fake Answer"
            id={quiz.id}
            {...commonProps}
          />
          <TextFieldCommon
            type="fakeAnswer2"
            label="Fake Answer 2"
            id={quiz.id}
            {...commonProps}
          />
          <TextFieldCommon
            type="fakeAnswer3"
            label="Fake Answer 3"
            id={quiz.id}
            {...commonProps}
          />
          <TextFieldCommon
            type="answer"
            label="Real Answer"
            id={quiz.id}
            {...commonProps}
          />
        </fieldset>
      ))}
    </>
  );
}

export default CreateQuestions;
