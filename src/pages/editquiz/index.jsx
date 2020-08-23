import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import QuizForm from '../../components/quizform';
import { editQuizThunk } from '../../asyncActions';
import { selectManipulateReducer } from '../../slices/manipulateSlice';

function EditQuiz() {
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
}

export default EditQuiz;
