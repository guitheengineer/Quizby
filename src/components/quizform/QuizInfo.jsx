import React from 'react';
import TextFieldCommon from './TextFieldCommon';
import ImageInput from './ImageInput';
import TextFieldCategory from '../TextFieldCategory';

const textFieldStyle = { marginTop: '2rem', font: '1.6rem Overpass' };

const QuizInfo = () => (
  <section className="Quiz-form__section Quiz-form__section-two">
    <h6 className="Quiz-form__title">Quiz Info</h6>
    <div className="Quiz-form__container">
      <ImageInput />
    </div>
    <TextFieldCommon
      label="Quiz name"
      required
      style={textFieldStyle}
      type="name"
      maxLength={35}
    />
    <TextFieldCommon
      type="description"
      label="Description"
      style={textFieldStyle}
      multiline
      maxLength={120}
    />
    <TextFieldCategory />
  </section>
);
export default QuizInfo;
