import React, { useEffect } from "react";
import Answers from "./Answers";
import Question from "./Question";
// import Infocounter from "./Infocounter";
import { useSelector, useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { getCurrentQuiz } from "../../asyncActions/getQuizzes";
import ListAnswers from "./ListAnswers";

function Container() {
  const {
    quizFetched,
    currentQuestionAnswered,
    userAnsweredCorrect,
    userAnsweredWrong,
  } = useSelector((d) => d.quizzesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentQuiz(window.location.pathname.substring(6)));
    console.log(window.location.pathname.substring(6));
  }, []);

  return (
    <>
      <div className="App__container">
        {/* <div className={`App__container ${currentQuestionAnswered && "blur"}`}> */}
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
