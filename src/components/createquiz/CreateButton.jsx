import React from 'react';
import { useDispatch } from 'react-redux';
import { addCreationQuiz } from '../../slices/manipulateSlice';

function CreateButton() {
  const dispatch = useDispatch();
  function addQuiz() {
    dispatch(addCreationQuiz());
  }

  return (
    <button type="button" onClick={addQuiz} className="Create-quiz__create">
      <div className="Create-quiz__illustration">
        <img alt="" src="/add.svg" className="Create-quiz__put-icon" />
        <p className="Create-quiz__insert">Add quiz</p>
      </div>
    </button>
  );
}

export default CreateButton;
