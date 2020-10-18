import React from 'react';
import FetchError from 'components/common/fetch-error/FetchError';
import LoaderSpinner from 'components/common/loader-spinner/LoaderSpinner';
import BackgroundContainer from 'components/main/background-container';
import { getCurrentQuiz } from 'slices/quizzes-slice/async-actions';
import { useAppSelector } from 'store';
import { selectQuizReducer } from 'slices/quizzes-slice';
import ListAnswers from './ListIconAnswers';
import Question from './Question';
import Answers from './Answers';

const Game = () => {
  const { quizFetchState, currentQuestionAnswered } = useAppSelector(
    selectQuizReducer
  );

  return (
    <BackgroundContainer>
      <div className={`App__playing ${currentQuestionAnswered && 'fade'}`}>
        <LoaderSpinner loadingState={quizFetchState} />
        {quizFetchState === 'fetched' && (
          <>
            <ListAnswers />
            <Question />
            <Answers />
          </>
        )}
        {quizFetchState === 'error' && <FetchError fetch={getCurrentQuiz} />}
      </div>
    </BackgroundContainer>
  );
};

export default Game;
