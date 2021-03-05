import React, { useEffect } from 'react';
import QuizForm from 'components/common/quiz-form';
import {
  resetQuizInfo,
  selectManipulateReducer,
} from 'slices/manipulate-slice';
import { sendForm } from 'slices/manipulate-slice/async-actions';
import { useAppSelector } from 'store';
import { useDispatch } from 'react-redux';

const CreateQuiz = () => {
  const { saveQuizFetchState } = useAppSelector(selectManipulateReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetQuizInfo());
  }, [dispatch]);
  return (
    <QuizForm
      functionType={sendForm}
      type="create"
      loadingState={saveQuizFetchState}
    />
  );
};

export default CreateQuiz;
