import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import BackgroundContainer from 'components/main/background-container';
import { setQuery, quizzesAdded } from 'slices/quizzes-slice';
import { useAppSelector, useAppDispatch } from 'store';
import { selectGeneralReducer } from 'slices/general-slice/general-slice';
import useQuiz from 'pages/hooks/useQuiz';
import QuizList from 'pages/quizzes/components/QuizList';

const Show = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { menuIsActive } = useAppSelector(selectGeneralReducer);
  const { name, image, description, _id } = useQuiz();

  useEffect(() => {
    dispatch(quizzesAdded());
  }, []);

  const handlePlay = () => {
    history.push(`/quizzes/play/${_id}`);
    dispatch(setQuery(''));
  };

  const displayQuizImage = useCallback(() => {
    if (!menuIsActive && image) {
      return {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.27), rgba(0, 0, 0, 0.27)), url('data:${image.contentType};base64,${image.data}')
        `,
        flex: '1 1 45%',
      };
    }
    if (menuIsActive) {
      return { backgroundColor: '#5255ca', flex: '1 0 90%' };
    }
  }, [menuIsActive, image]);

  return (
    <div className="Show">
      <div style={displayQuizImage()} className="Show__image" />
      <BackgroundContainer
        justifyContent="normal"
        alignItems="center"
        overflow="normal"
        marginTop="-15px"
      >
        <>
          <div className="Show__playarea">
            <h1>{name}</h1>
            <p>{description}</p>
            <button
              onClick={handlePlay}
              style={{ marginTop: description && '2.4rem' }}
              type="button"
            >
              Play
            </button>
          </div>
          <QuizList
            className="Quizzes__sectiontwo--show"
            label="Other quizzes"
            type="mostPlayed"
          />
        </>
      </BackgroundContainer>
    </div>
  );
};

export default Show;
