import React from 'react';
import TextFieldCommon from '../textfields/TextFieldCommon';

const textFieldStyle = { marginTop: '2rem', font: '1.6rem Overpass' };

function QuizInfo() {
  return (
    <section className="Create-quiz__section Create-quiz__section-two">
      <h6 className="Create-quiz__title">Quiz Info</h6>
      <div className="Create-quiz__container">
        <input
          className="Create-quiz__input
          Create-quiz__input-image"
          alt=""
          type="file"
          accept="image/*"
        />
        <div className="Create-quiz__add">
          <img
            alt="Insert file"
            src="/put-image.svg"
            className="Create-quiz__put-image"
          />
          <span className="Create-quiz__text">Add image</span>
        </div>
      </div>
      <TextFieldCommon
        label="Quiz name"
        required
        style={textFieldStyle}
        type="name"
      />
      <TextFieldCommon
        type="description"
        label="Description"
        style={textFieldStyle}
        multiline
      />
    </section>
  );
}

export default QuizInfo;
