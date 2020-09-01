import React from 'react';
import { useDispatch } from 'react-redux';
import { addCreationQuiz } from '../../slices/manipulate-slice';

const CreateButton = () => {
  const dispatch = useDispatch();
  function addQuiz() {
    dispatch(addCreationQuiz());
  }

  return (
    <button type="button" onClick={addQuiz} className="Quiz-form__create">
      <div className="Quiz-form__illustration">
        <img alt="" src="/add.svg" className="Quiz-form__put-icon" />
        <p className="Quiz-form__insert">Add quiz</p>
      </div>
    </button>
  );
};

export default CreateButton;
