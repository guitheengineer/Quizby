import React, { useEffect, useCallback } from 'react';
import './done.scss';
import { useHistory, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store';
import { selectUserReducer, setUser } from '../../slices/user-slice/user-slice';
import { saveQuizResult } from '../../slices/user-slice/async-actions';
import { resetUserStats } from '../../slices/quizzes-slice';
import BackgroundContainer from '../../components/main/background-container';
import playAgain from '../../assets/icons/playagain.svg';
import { Donut, DonutValue } from 'react-donut-component';
import HoldLoading from '../../components/common/hold-loading/HoldLoading';
import useVerifyUser from '../../routes/hooks/useVerifyUser';

interface ParamTypes {
  quizId: string;
}

const Done = () => {
  const dispatch = useAppDispatch();
  const { done, percentage } = useAppSelector(
    (state) => state.quizzes.userStats
  );
  const history = useHistory();
  const { isAuthenticated, username } = useVerifyUser();
  const { saveQuizFetchState } = useAppSelector(selectUserReducer);
  const { quizId } = useParams<ParamTypes>();

  useEffect(() => {
    return () => dispatch(resetUserStats());
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
    if (percentage < 45) {
      return 'You can do better!';
    }
    if (percentage < 60) {
      return 'Not so bad';
    }
    if (percentage < 80) {
      return 'Nice result!';
    }
    return 'What a performance!';
  }, [percentage]);

  return (
    <BackgroundContainer alignItems="center">
      <>
        <HoldLoading isLoading={saveQuizFetchState} />
        <Donut
          className="Done__donut"
          strokeWidth={11}
          indicatorColor="#5255ca"
          color="rgba(10, 10, 31, 0.9)"
        >
          <DonutValue className="Done__donut-text">{percentage}</DonutValue>
        </Donut>
        <div className="Done__phrase">{conditionalPhrase()}</div>
        <div className="Done__button">
          <button
            onClick={() => {
              dispatch(resetUserStats());
              history.push(`/quizzes/play/${quizId}`);
            }}
            className="Done__button--playagain"
            type="button"
          >
            <img className="Done__img" alt="Play again" src={playAgain} />
          </button>
          <button
            onClick={() => history.push('/quizzes')}
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
