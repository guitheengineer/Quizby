import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import BackgroundContainer from '../../components/backgroundcontainer';
import { getMostPlayedQuizzes } from '../../asyncActions';
import { setQuiz } from '../../slices/quizzesSlice';
import FetchError from '../../components/FetchError';

function Quizzes() {
  const dispatch = useDispatch();
  const { topPlayedFetchState, topPlayedQuizzes } = useSelector(
    (selectorData) => selectorData.quizzesReducer
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
      <ClipLoader
        css={`
          position: relative;
          top: 46%;
          margin: auto;
        `}
        loading={topPlayedFetchState === 'loading'}
        color="#5255CA"
      />
      <div className="App__quizzes--container">
        {topPlayedFetchState === 'error' && (
          <FetchError fetchFunction={getMostPlayedQuizzes} />
        )}
        {topPlayedFetchState === 'fetched' && (
          <>
            <div className="App__quizzes--container--title">Top played</div>
            <div className="App__quizzes--container--list">
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
            </div>
          </>
        )}
      </div>
    </BackgroundContainer>
  );
}

export default Quizzes;
