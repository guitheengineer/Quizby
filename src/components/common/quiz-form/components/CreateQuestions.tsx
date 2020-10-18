import React from 'react';
import {
  selectManipulateReducer,
  removeCreatedQuiz,
} from 'slices/manipulate-slice';
import { useAppSelector, useAppDispatch } from 'store';
import TextFieldCommon from './TextFieldCommon';
import TextFieldFakeAnswer from './TextFieldFakeAnswer';

const CreateQuestions = () => {
  const dispatch = useAppDispatch();
  const { creationQuizzes } = useAppSelector(selectManipulateReducer);
  const close = (_id: string) => {
    dispatch(removeCreatedQuiz(_id));
  };

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
          {[...Array(4)].map((e, fakeIndex) => (
            <TextFieldFakeAnswer number={fakeIndex} index={i} />
          ))}
        </fieldset>
      ))}
    </>
  );
};

export default CreateQuestions;
