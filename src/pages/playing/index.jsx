import React from 'react';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import Answers from '../../components/gaming/Answers';
import Question from '../../components/gaming/Question';
import { getCurrentQuiz } from '../../asyncActions';
import ListAnswers from '../../components/gaming/ListIconAnswers';
import FetchError from '../../components/FetchError';
import BackgroundContainer from '../../components/backgroundcontainer';
import { getQuiz } from '../../customhooks';
import { selectQuizReducer } from '../../slices/quizzesSlice';

function Playing() {
  const {
    quizFetchState,
    userAnsweredCorrect,
    userAnsweredWrong,
    currentQuestionAnswered,
  } = useSelector(selectQuizReducer);
  getQuiz();

  return (
    <>
      <BackgroundContainer>
        <div className={`App__playing ${currentQuestionAnswered && 'fade'}`}>
          <ClipLoader loading={quizFetchState === 'loading'} color="#5255CA" />
          {quizFetchState === 'fetched' && (
            <>
              <ListAnswers />
              <Question />
              <Answers />
            </>
          )}
          {quizFetchState === 'error' && (
            <FetchError fetchFunction={getCurrentQuiz} />
          )}
        </div>
      </BackgroundContainer>
      {userAnsweredCorrect ? (
        <img
          src="../../../correct.svg"
          className="App__playing--correct"
          alt="Correct answer"
        />
      ) : (
        userAnsweredWrong && (
          <img
            src="../../../wrong.svg"
            className="App__playing--correct"
            alt="Wrong answer"
          />
        )
      )}
    </>
  );
}

export default Playing;
