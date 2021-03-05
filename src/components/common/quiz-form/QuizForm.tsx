import React, { useEffect } from 'react';
import './quiz-form.scss';
import { useAppDispatch } from 'store';
import QuizInfo from './components/QuizInfo';
import CreateQuestions from './components/CreateQuestions';
import BackgroundContainer from 'components/main/background-container';
import CreateButton from './components/CreateButton';
import ButtonSaveQuiz from './components/ButtonSaveQuiz';
import { setNewQuizId } from 'slices/manipulate-slice';
import Notification from '../notification/Notification';
import { ThunkResponses } from 'types';
import { nanoid } from 'nanoid';

type Props = {
  functionType: any;
  className?: string;
  type?: string;
  loadingState: ThunkResponses;
};

const QuizForm = ({
  functionType,
  className = '',
  type,
  loadingState,
}: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (type === 'create') {
      dispatch(setNewQuizId(nanoid()));
    }
  }, [dispatch, type]);

  return (
    <BackgroundContainer
      overflow="normal"
      justifyContent="normal"
      alignItems="center"
    >
      <>
        <div className={`Quiz-form ${className}`}>
          <QuizInfo />
          <CreateQuestions />
          <CreateButton />
          <ButtonSaveQuiz
            functionType={functionType}
            title="Save quiz"
            loadingState={loadingState}
          />
        </div>
        {loadingState === 'rejected' && (
          <Notification message="Please, verify if all required fields are filled correctly or try again later" />
        )}
      </>
    </BackgroundContainer>
  );
};

export default QuizForm;
