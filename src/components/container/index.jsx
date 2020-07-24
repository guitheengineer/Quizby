import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import Answers from '../gaming/Answers';
import Question from '../gaming/Question';
import { getCurrentQuiz } from '../../asyncActions';
import ListAnswers from '../gaming/ListIconAnswers';

function Container() {
  const { quizFetched, userAnsweredCorrect, userAnsweredWrong } = useSelector(
    (d) => d.quizzesReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentQuiz(window.location.pathname.substring(6)));
    console.log(window.location.pathname.substring(6));
  }, []);

  return (
    <>
      <div className="App__container">
        <ClipLoader loading={!quizFetched} color="#5255CA" />
        {quizFetched && (
          <>
            <ListAnswers />
            <Question />
            <Answers />
          </>
        )}
      </div>
      {userAnsweredCorrect ? (
        <img
          src="../../../correct.svg"
          className="App__container--correct"
          alt="Correct answer"
        />
      ) : (
        userAnsweredWrong && (
          <img
            src="../../../wrong.svg"
            className="App__container--correct"
            alt="Wrong answer"
          />
        )
      )}
    </>
  );
}

export default Container;
