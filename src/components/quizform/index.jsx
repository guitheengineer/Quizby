import React, { useEffect } from 'react';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import QuizInfo from './QuizInfo';
import CreateQuestions from './CreateQuestions';
import BackgroundContainer from '../backgroundcontainer';
import CreateButton from './CreateButton';
import ButtonSaveQuiz from './ButtonSaveQuiz';
import { setNewQuizId } from '../../slices/manipulate-slice';
import Notification from '../Notification';

const QuizForm = ({ functionType, className, type, loadingState }) => {
  const dispatch = useDispatch();
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

QuizForm.propTypes = {
  className: PropTypes.string,
  functionType: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  loadingState: PropTypes.string.isRequired,
};

QuizForm.defaultProps = {
  className: '',
};

export default QuizForm;
