import React from 'react';
import { useSelector } from 'react-redux';
import QuizForm from '../../quizform';
import { sendForm } from '../../../async-actions';
import { selectManipulateReducer } from '../../../slices/manipulate-slice';

const CreateQuiz = () => {
  const { saveQuizFetchState } = useSelector(selectManipulateReducer);

  return (
    <QuizForm
      functionType={sendForm}
      type="create"
      loadingState={saveQuizFetchState}
    />
  );
};

export default CreateQuiz;
