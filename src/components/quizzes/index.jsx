import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BackgroundContainer from '../backgroundcontainer';

import { getMostPlayedQuizzes } from '../../asyncActions';
import { setQuiz } from '../../slices/quizzesSlice';

function Quizzes({ history }) {
  const dispatch = useDispatch();
  const topPlayedQuizzes = useSelector(
    (selectorData) => selectorData.quizzesReducer.topPlayedQuizzes,
  );

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
              <p className="App__quizzes--container--list--item--quiztitle">{quiz.name}</p>
            </button>
          ))}
        </ul>
      </div>
    </BackgroundContainer>
  );
}

Quizzes.propTypes = {
  history: PropTypes.object.isRequired,
};

const QuizzesWithRouter = withRouter(Quizzes);

export default QuizzesWithRouter;
