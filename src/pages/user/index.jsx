import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Clipboard, Crosshair, Coffee } from 'react-feather';
import { useParams } from 'react-router-dom';
import capitalize from '../../appUtils/capitalize';
import BackgroundContainer from '../../components/backgroundcontainer';
import { selectUserReducer } from '../../slices/userSlice';
import { getUserQuizzes, verifyUser } from '../../asyncActions';
import { selectQuizReducer } from '../../slices/quizzesSlice';
import ButtonQuiz from '../../components/quizzes/ButtonQuiz';
import Number from '../../components/user/Number';
import ButtonQuizPermission from '../../components/user/ButtonQuizPermission';

function User() {
  const { isAuthenticated, username } = useSelector(selectUserReducer);
  const { username: usernameParam } = useParams();

  const {
    quizzesPlayed,
    quizzesCreated,
    quizAverage,
    countQuizzesPlayed,
    countQuizzesCreated,
  } = useSelector(selectQuizReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserQuizzes(usernameParam));
    const token = localStorage.getItem('TOKEN');
    if (token) {
      dispatch(verifyUser(token));
    }
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
    <BackgroundContainer
      justifyContent="normal"
      alignItems="center"
      overflow="normal"
    >
      <div className="User">
        <section className="User__profile">
          <h4 className="User__title">{capitalize(usernameParam)} profile</h4>
          <ul className="User__stats">
            <Number
              icon={Clipboard}
              label={countQuizzesCreated}
              description="Created"
            />
            <Number icon={Crosshair} label={quizAverage} description="Rating" />
            <Number
              icon={Coffee}
              label={countQuizzesPlayed}
              description="Games"
            />
          </ul>
        </section>
        <section className="User__played">
          {quizzesPlayed[0] && (
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
          )}
        </section>
        <section className="User__created">
          {quizzesCreated[0] && (
            <>
              <h4 className="User__title">Created</h4>
              <ul className="User__quizzes User__quizzes--created">
                {quizzesCreated.map((quiz) => chooseButton(quiz))}
              </ul>
            </>
          )}
        </section>
      </div>
    </BackgroundContainer>
  );
}

export default User;
