import React from "react";
import BackgroundContainer from "../BackgroundContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMostPlayedQuizzes } from "../../asyncActions/getQuizzes";
import { setQuiz } from "../../slices/quizzesSlice";
import { withRouter } from "react-router-dom";

function Quizzes({ history }) {
  const dispatch = useDispatch();
  const topPlayedQuizzes = useSelector(
    (data) => data.quizzesReducer.topPlayedQuizzes
  );

  useEffect(() => {
    dispatch(getMostPlayedQuizzes());
  }, []);

  function quizClicked(quiz) {
    dispatch(setQuiz(quiz));
    history.push(`/play:${quiz._id}`);
  }

  return (
    <BackgroundContainer justifyContent="normal">
      <div className="App__quizzes--container">
        <div className="App__quizzes--container--title">Top played</div>
        <ul className="App__quizzes--container--list">
          {topPlayedQuizzes.map((quiz) => (
            <li
              key={quiz._id}
              className="App__quizzes--container--list--item"
              onClick={() => quizClicked(quiz)}
            >
              <p className="App__quizzes--container--list--item--quiztitle">
                {quiz.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </BackgroundContainer>
  );
}

const QuizzesWithRouter = withRouter(Quizzes);

export default QuizzesWithRouter;
