import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BackgroundContainer from '../../backgroundcontainer';
import { setQuery } from '../../../slices/quizzes-slice';
import QuizList from '../quizzes/QuizList';
import { setQuiz, setMenuIsActive } from '../../../customhooks';
import { getQuizzes } from '../../../async-actions';

const Show = () => {
  const menuIsActive = setMenuIsActive();
  const dispatch = useDispatch();
  const history = useHistory();
  const { name, image, description, _id } = setQuiz();

  useEffect(() => {
    dispatch(getQuizzes());
  }, []);

  function playButton() {
    history.push(`/quizzes/play/${_id}`);
    dispatch(setQuery(''));
  }

  function displayQuizImage() {
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
    return null;
  }

  return (
    <div className="Show">
      <div style={displayQuizImage()} className="Show__image" />
      <BackgroundContainer
        justifyContent="normal"
        alignItems="center"
        overflow="normal"
        mgTop="-15px"
      >
        <div className="Show__playarea">
          <h1>{name}</h1>
          <p>{description}</p>
          <button
            onClick={playButton}
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
      </BackgroundContainer>
    </div>
  );
};

export default Show;
