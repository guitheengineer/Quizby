import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Clipboard, Crosshair, Coffee } from 'react-feather';
import BackgroundContainer from '../../components/backgroundcontainer';
import { selectUserReducer } from '../../slices/userSlice';
import { getUserQuizzes } from '../../asyncActions';
import { selectQuizReducer } from '../../slices/quizzesSlice';
import ButtonQuiz from '../../components/quizzes/ButtonQuiz';
import Stats from '../../components/user/Number';

function User() {
  const { username } = useSelector(selectUserReducer);
  const {
    quizzesPlayed,
    quizzesCreated,
    quizAverage,
    countQuizzesPlayed,
    countQuizzesCreated,
  } = useSelector(selectQuizReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserQuizzes());
  }, [username]);

  return (
    <BackgroundContainer
      justifyContent="normal"
      alignItems="center"
      overflow="normal"
    >
      <div className="User">
        <section className="User__profile">
          <h4 className="User__title">User profile</h4>
          <ul className="User__stats">
            <Stats
              icon={Clipboard}
              label={countQuizzesCreated}
              description="Created"
            />
            <Stats icon={Crosshair} label={quizAverage} description="Rating" />
            <Stats
              icon={Coffee}
              label={countQuizzesPlayed}
              description="Games"
            />
          </ul>
        </section>
        <section className="User__played">
          <h4 className="User__title">Played recently</h4>
          <ul className="User__quizzes">
            {quizzesPlayed.map((quiz) => (
              <ButtonQuiz key={quiz.id} className="User__item" quiz={quiz} />
            ))}
          </ul>
        </section>
        <section className="User__created">
          <h4 className="User__title">Created</h4>
          <ul className="User__quizzes">
            {quizzesCreated.map((quiz) => (
              <ButtonQuiz key={quiz.id} className="User__item" quiz={quiz} />
            ))}
          </ul>
        </section>
      </div>
    </BackgroundContainer>
  );
}

export default User;
