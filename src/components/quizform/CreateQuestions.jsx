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
  function close(id) {
    dispatch(removeCreatedQuiz(id));
  }

  return (
    <>
      <h6 className="Quiz-form__title Quiz-form__title--questions">
        Questions
      </h6>
      {creationQuizzes.map((quiz, i) => (
        <fieldset key={quiz.id} className="Quiz-form__quiz-creation">
          <legend className="Quiz-form__quiz-legend">Question {i + 1}</legend>
          <button
            type="button"
            onClick={() => close(quiz.id)}
            aria-label="Close quiz"
            className="Quiz-form__close"
          />
          <TextFieldCommon
            type="question"
            label="Question"
            required
            multiline
            maxLength={140}
            index={i}
          />
          <TextFieldCommon
            type="fakeAnswer1"
            label="Fake Answer"
            {...commonProps}
            index={i}
          />
          <TextFieldCommon
            type="fakeAnswer2"
            label="Fake Answer 2"
            {...commonProps}
            index={i}
          />
          <TextFieldCommon
            type="fakeAnswer3"
            label="Fake Answer 3"
            {...commonProps}
            index={i}
          />
          <TextFieldCommon
            type="answer"
            label="Real Answer"
            {...commonProps}
            index={i}
          />
        </fieldset>
      ))}
    </>
  );
}

export default CreateQuestions;
