import React from 'react';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { useHistory } from 'react-router-dom';
import Answers from './Answers';
import Question from './Question';
import { getCurrentQuiz } from '../../../async-actions';
import ListAnswers from './ListIconAnswers';
import FetchError from '../../FetchError';
import BackgroundContainer from '../../backgroundcontainer';
import { setQuiz } from '../../../customhooks';
import { selectQuizReducer } from '../../../slices/quizzes-slice';

const Playing = () => {
  const {
    quizFetchState,
    userAnsweredCorrect,
    userAnsweredWrong,
    currentQuestionAnswered,
    userStats,
    currentQuiz,
  } = useSelector(selectQuizReducer);
  const history = useHistory();
  const { _id } = currentQuiz;
  const { done } = userStats;
  setQuiz();

  function animationEnd() {
    if (done) {
      setTimeout(() => {
        history.push(`/quizzes/done/${_id}`);
      }, 1200);
    }
  }

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
          onAnimationEnd={animationEnd}
          src="../../../correct.svg"
          className="App__playing--correct"
          alt="Correct answer"
        />
      ) : (
        userAnsweredWrong && (
          <img
            onAnimationEnd={animationEnd}
            src="../../../wrong.svg"
            className="App__playing--correct"
            alt="Wrong answer"
          />
        )
      )}
    </>
  );
};

export default Playing;
