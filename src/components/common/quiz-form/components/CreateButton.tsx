import React from 'react';
import { addCreationQuiz } from 'slices/manipulate-slice';
import { useAppDispatch } from 'store';
import add from 'assets/icons/add.svg';

const CreateButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(addCreationQuiz())}
      className="Quiz-form__create"
    >
      <div className="Quiz-form__illustration">
        <img alt="" src={add} className="Quiz-form__put-icon" />
        <p className="Quiz-form__insert">Add quiz</p>
      </div>
    </button>
  );
};

export default CreateButton;
