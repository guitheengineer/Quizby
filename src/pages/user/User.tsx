import React, { useEffect, useCallback } from 'react';
import './user.scss';
import { Clipboard, Crosshair, Coffee } from 'react-feather';
import { Link, useParams } from 'react-router-dom';
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
  }, [usernameParam, dispatch]);

  useEffect(() => {
    // if user exists, display his quizzes
    if (usernameState === 'fulfilled' && errorExistsUsername.errorExists)
      dispatch(getUserQuizzes(usernameParam));
  }, [dispatch, usernameParam, usernameState, errorExistsUsername.errorExists]);

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
    [usernameParam, username, isAuthenticated]
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
        isLoading={[usernameState, getUserQuizzesState, deleteQuizFetchState]}
      >
        {errorExistsUsername.errorExists ? (
          <div
            className="User"
            style={{
              marginBottom:
                isAuthenticated && usernameParam === username ? '8rem' : 0,
            }}
          >
            <>
              <section className="User__profile">
                <div className="User__info">
                  <h4
                    className="User__title User__title--username"
                    style={{
                      textAlign:
                        isAuthenticated && usernameParam === username
                          ? 'initial'
                          : 'center',
                    }}
                  >
                    @{usernameParam}
                  </h4>
                  {isAuthenticated && usernameParam === username && (
                    <button className="User__create-quiz" type="button">
                      <Link to={`/user/${username}/createquiz`}>
                        Create quiz
                      </Link>
                    </button>
                  )}
                </div>
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
              <section
                className={`User__created ${
                  quizzesPlayed.length ? 'User__created--second' : null
                }`}
              >
                {quizzesCreated.length ? (
                  <>
                    <h4 className="User__title">Created</h4>
                    <ul
                      className={`User__quizzes ${
                        isAuthenticated && usernameParam === username
                          ? 'User__quizzes--created'
                          : null
                      }`}
                    >
                      {quizzesCreated.map((quiz: any) => chooseButton(quiz))}
                    </ul>
                  </>
                ) : null}
              </section>
            </>
          </div>
        ) : usernameState === 'fulfilled' ? (
          <FetchError
            className="User__error"
            type="common"
            btnMessage="Go home"
          >
            User not found
          </FetchError>
        ) : (
          <></>
        )}
      </BackgroundContainer>
    </>
  );
};

export default User;
