import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import Answers from '../../components/gaming/Answers';
import Question from '../../components/gaming/Question';
import { getCurrentQuiz } from '../../asyncActions';
import ListAnswers from '../../components/gaming/ListIconAnswers';
import FetchError from '../../components/FetchError';
import BackgroundContainer from '../../components/backgroundcontainer';

function Playing() {
  const {
    quizFetchState,
    userAnsweredCorrect,
    userAnsweredWrong,
  } = useSelector((d) => d.quizzesReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentQuiz(window.location.pathname.substring(14)));
  }, []);

  return (
    <>
      <BackgroundContainer>
        <div className="App__playing">
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
