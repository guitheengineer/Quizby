import React, { useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store';
import { selectUserReducer, setUser } from 'slices/user-slice/user-slice';
import { saveQuizResult } from 'slices/user-slice/async-actions';
import { resetUserStats } from 'slices/quizzes-slice';
import BackgroundContainer from 'components/main/background-container';
import playAgain from 'assets/icons/playagain.svg';
import Donut from '../../components/common/donut/Donut';

interface ParamTypes {
  quizId: string;
}

const Done = () => {
  const dispatch = useAppDispatch();
  const { done, percentage } = useAppSelector(
    (state) => state.quizzes.userStats
  );
  const history = useHistory();
  const { isAuthenticated, username } = useAppSelector(selectUserReducer);
  const { quizId } = useParams<ParamTypes>();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setUser());
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(saveQuizResult({ percentage, quizId, username }));
    }
    if (!done) {
      history.goBack();
    }
  }, [done]);

  const conditionalPhrase = useCallback(() => {
    if (percentage < 20) {
      return 'Next time you will do better!';
    }
    if (percentage < 45) {
      return 'Not so bad!';
    }
    if (percentage < 60) {
      return 'You can do better!';
    }
    if (percentage < 80) {
      return 'Nice result!';
    }
    return 'What a performance!';
  }, [percentage]);

  const restartGame = () => {
    dispatch(resetUserStats());
    history.push(`/quizzes/play/${quizId}`);
  };

  return (
    <BackgroundContainer alignItems="center">
      <>
        <Donut value={percentage} />
        <div className="Done__phrase">{conditionalPhrase()}</div>
        <div className="Done__button">
          <button
            onClick={restartGame}
            className="Done__button--playagain"
            type="button"
          >
            <img alt="Play again" src={playAgain} />
          </button>
          <button
            onClick={() => history.push('/')}
            className="Done__button--home"
            type="button"
          >
            Go home
          </button>
        </div>
      </>
    </BackgroundContainer>
  );
};

export default Done;
