import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import QuizForm from '../../quizform';
import { editQuizThunk } from '../../../async-actions';
import { selectManipulateReducer } from '../../../slices/manipulate-slice';

const EditQuiz = () => {
  const { isEditing, editQuizFetchState } = useSelector(
    selectManipulateReducer
  );
  const history = useHistory();

  useEffect(() => {
    if (!isEditing) {
      history.goBack();
    }
  }, []);

  return (
    <QuizForm
      functionType={editQuizThunk}
      type="edit"
      loadingState={editQuizFetchState}
    />
  );
};

export default EditQuiz;
