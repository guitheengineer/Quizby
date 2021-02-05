import React, { useEffect } from 'react';
import './quiz-form.scss';
import shortid from 'shortid';
import { useAppDispatch } from '../../../store';
import QuizInfo from './components/QuizInfo';
import CreateQuestions from './components/CreateQuestions';
import BackgroundContainer from '../../main/background-container';
import CreateButton from './components/CreateButton';
import ButtonSaveQuiz from './components/ButtonSaveQuiz';
import { setNewQuizId } from '../../../slices/manipulate-slice';
import Notification from '../notification/Notification';

type Props = {
  functionType: any;
  className?: string;
  type?: string;
  loadingState: string;
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
      dispatch(setNewQuizId(shortid.generate()));
    }
  }, []);

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
        {loadingState === 'rejected' && <Notification />}
      </>
    </BackgroundContainer>
  );
};

export default QuizForm;
