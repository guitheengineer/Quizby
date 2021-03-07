import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import './done.scss';
import { useAppSelector, useAppDispatch } from 'store';
import { selectUserReducer } from 'slices/user-slice/user-slice';
import { resetUserStats } from 'slices/quizzes-slice';
import BackgroundContainer from 'components/main/background-container';
import playAgain from 'assets/icons/playagain.svg';
import { Donut, DonutValue } from 'react-donut-component';
import HoldLoading from 'components/common/hold-loading/HoldLoading';

type ParamTypes = {
  quizId: string;
};

const Done = () => {
  const dispatch = useAppDispatch();
  const { percentage, done } = useAppSelector(
    (state) => state.quizzes.userStats
  );
  const history = useHistory();
  const { saveQuizFetchState } = useAppSelector(selectUserReducer);
  const { quizId } = useParams<ParamTypes>();

  useEffect(() => {
    if (!done) {
      history.push(`/quizzes/show/${quizId}`);
    }
    return () => {
      dispatch(resetUserStats());
    };
  }, [done, quizId, history, dispatch]);

  const conditionalPhrase = useCallback(() => {
    if (typeof percentage === 'number') {
      if (percentage < 60) {
        return 'You can do better!';
      }
      if (percentage < 80) {
        return 'Nice result!';
      }
      return 'Great performance!';
    }
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
          <DonutValue className="Done__donut-text">
            {percentage.toFixed(0)}
          </DonutValue>
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
