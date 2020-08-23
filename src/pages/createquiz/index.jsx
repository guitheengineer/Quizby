import React from 'react';
import { useSelector } from 'react-redux';
import QuizForm from '../../components/quizform';
import { sendForm } from '../../asyncActions';
import { selectManipulateReducer } from '../../slices/manipulateSlice';

function CreateQuiz() {
  const { saveQuizFetchState } = useSelector(selectManipulateReducer);

  return (
    <QuizForm
      functionType={sendForm}
      type="create"
      loadingState={saveQuizFetchState}
    />
  );
}

export default CreateQuiz;
