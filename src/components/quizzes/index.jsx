import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BackgroundContainer from '../backgroundcontainer';

import { getMostPlayedQuizzes } from '../../asyncActions';
import { setQuiz } from '../../slices/quizzesSlice';

function Quizzes() {
  const dispatch = useDispatch();
  const topPlayedQuizzes = useSelector(
    (selectorData) => selectorData.quizzesReducer.topPlayedQuizzes
  );
  const history = useHistory();
  useEffect(() => {
    dispatch(getMostPlayedQuizzes());
  }, []);

  function quizClicked(quiz) {
    dispatch(setQuiz(quiz));
    history.push(`/play/${quiz._id}`);
  }

  return (
    <BackgroundContainer justifyContent="normal">
      <div className="App__quizzes--container">
        <div className="App__quizzes--container--title">Top played</div>
        <ul className="App__quizzes--container--list">
          {topPlayedQuizzes.map((quiz) => (
            <button
              type="button"
              key={quiz._id}
              className="App__quizzes--container--list--item"
              onClick={() => quizClicked(quiz)}
            >
              <p className="App__quizzes--container--list--item--quiztitle">
                {quiz.name}
              </p>
            </button>
          ))}
        </ul>
      </div>
    </BackgroundContainer>
  );
}

export default Quizzes;
