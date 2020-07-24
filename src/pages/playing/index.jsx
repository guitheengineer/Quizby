import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import Answers from '../../components/gaming/Answers';
import Question from '../../components/gaming/Question';
import { getCurrentQuiz } from '../../asyncActions';
import ListAnswers from '../../components/gaming/ListIconAnswers';

function Playing() {
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
      <div className="App__playing">
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
