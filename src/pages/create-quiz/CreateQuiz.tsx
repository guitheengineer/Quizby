import React from 'react';
import QuizForm from 'components/common/quiz-form';
import { selectManipulateReducer } from 'slices/manipulate-slice';
import { sendForm } from 'slices/manipulate-slice/async-actions';
import { useAppSelector } from 'store';

const CreateQuiz = () => {
  const { saveQuizFetchState } = useAppSelector(selectManipulateReducer);

  return (
    <QuizForm
      functionType={sendForm}
      type="create"
      loadingState={saveQuizFetchState}
    />
  );
};

export default CreateQuiz;
