import React, { useEffect, useCallback } from 'react';
import './user.scss';
import { Clipboard, Crosshair, Coffee } from 'react-feather';
import { useParams } from 'react-router-dom';
import BackgroundContainer from '../../components/main/background-container';
import { useAppSelector, useAppDispatch } from '../../store';
import { selectQuizReducer, getUserQuizzes } from '../../slices/quizzes-slice';
import ButtonQuiz from '../../pages/quizzes/components/ButtonQuiz';
import ButtonQuizPermission from './components/ButtonQuizPermission';
import Number from './components/Number';
import { checkIfUserExists } from '../../slices/form-slice/async-actions';
import { selectFormReducer } from '../../slices/form-slice/form-slice';
import HoldLoading from '../../components/common/hold-loading/HoldLoading';
import FetchError from '../../components/common/fetch-error/FetchError';
import useVerifyUser from '../../routes/hooks/useVerifyUser';

type ParamTypes = {
  usernameParam: string;
};

const User = () => {
  const dispatch = useAppDispatch();
  const { errorExistsUsername, usernameState } = useAppSelector(
    selectFormReducer
  );

  const { usernameParam } = useParams<ParamTypes>();
  const { isAuthenticated, username } = useVerifyUser();

  const {
    quizzesPlayed,
    quizzesCreated,
    quizAverage,
    countQuizzesPlayed,
    countQuizzesCreated,
    deleteQuizFetchState,
    getUserQuizzesState,
  } = useAppSelector(selectQuizReducer);

  useEffect(() => {
    dispatch(checkIfUserExists(usernameParam));
  }, [usernameParam]);

  useEffect(() => {
    dispatch(getUserQuizzes(usernameParam));
  }, [username]);
  const chooseButton = useCallback(
    (quiz) => {
      if (isAuthenticated && usernameParam === username) {
        return (
          <ButtonQuizPermission
            key={quiz._id}
            quiz={quiz}
            username={usernameParam}
          />
        );
      }
      return <ButtonQuiz key={quiz._id} className="User__item" quiz={quiz} />;
    },
    [usernameParam, username]
  );

  return (
    <>
      <HoldLoading
        isLoading={[usernameState, getUserQuizzesState, deleteQuizFetchState]}
      />
      <BackgroundContainer
        justifyContent="normal"
        alignItems="center"
        overflow="normal"
      >
        <div className="User">
          {errorExistsUsername.errorExists ? (
            <>
              <section className="User__profile">
                <h4 className="User__title User__title--username">
                  {usernameParam}
                </h4>
                <ul className="User__stats">
                  <Number
                    icon={Clipboard}
                    label={countQuizzesCreated}
                    description="Created"
                  />
                  <Number
                    icon={Crosshair}
                    label={quizAverage}
                    description="Rating"
                  />
                  <Number
                    icon={Coffee}
                    label={countQuizzesPlayed}
                    description="Games"
                  />
                </ul>
              </section>
              <section className="User__played">
                {quizzesPlayed.length ? (
                  <>
                    <h4 className="User__title">Played recently</h4>
                    <ul className="User__quizzes">
                      {quizzesPlayed.map((quiz) => (
                        <ButtonQuiz
                          key={quiz.id}
                          className="User__item"
                          quiz={quiz}
                        />
                      ))}
                    </ul>
                  </>
                ) : null}
              </section>
              <section className="User__created">
                {quizzesCreated.length ? (
                  <>
                    <h4 className="User__title">Created</h4>
                    <ul className="User__quizzes User__quizzes--created">
                      {quizzesCreated.map((quiz: any) => chooseButton(quiz))}
                    </ul>
                  </>
                ) : null}
              </section>
            </>
          ) : (
            usernameState === 'fulfilled' && (
              <FetchError type="common" btnMessage="Go home">
                User not found
              </FetchError>
            )
          )}
        </div>
      </BackgroundContainer>
    </>
  );
};

export default User;
