import React from 'react';
import TextFieldCommon from './TextFieldCommon';
import ImageInput from './ImageInput';
import TextFieldCategory from '../TextFieldCategory';

const textFieldStyle = { marginTop: '2rem', font: '1.6rem Overpass' };

function QuizInfo() {
  return (
    <section className="Create-quiz__section Create-quiz__section-two">
      <h6 className="Create-quiz__title">Quiz Info</h6>
      <div className="Create-quiz__container">
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
}

export default QuizInfo;
