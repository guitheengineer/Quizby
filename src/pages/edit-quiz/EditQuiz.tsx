import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuizForm from 'components/common/quiz-form';
import { selectManipulateReducer } from 'slices/manipulate-slice';
import { useAppSelector } from 'store';
import { editQuizThunk } from 'slices/manipulate-slice/async-actions';

const EditQuiz = () => {
  const { isEditing, editQuizFetchState } = useAppSelector(
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
