import React from 'react';
import { TextFieldCategory } from 'components/common/textfields';
import TextFieldCommon from './TextFieldCommon';
import ImageInput from './ImageInput';

const QuizInfo = () => (
  <section className="Quiz-form__section Quiz-form__section-two">
    <h6 className="Quiz-form__title">Quiz Info</h6>
    <div className="Quiz-form__container">
      <ImageInput />
    </div>
    <TextFieldCommon
      type="name"
      label="Quiz name"
      className="quiz-info"
      required
      maxLength={35}
    />
    <TextFieldCommon
      type="description"
      label="Description"
      className="quiz-info"
      maxLength={120}
      multiline
    />
    <TextFieldCategory />
  </section>
);
export default QuizInfo;
