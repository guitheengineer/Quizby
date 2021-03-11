import { useEffect, useCallback } from 'react';
import './show.scss';
import { useHistory } from 'react-router-dom';
import BackgroundContainer from 'components/main/background-container';
import { setQuery, quizzesAdded } from 'slices/quizzes-slice';
import { useAppSelector, useAppDispatch } from 'store';
import useQuiz from 'components/hooks/useQuiz';
import QuizList from 'pages/quizzes/components/QuizList';
import HoldLoading from 'components/common/hold-loading/HoldLoading';

const Show = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { menuIsActive } = useAppSelector((state) => state.general);
  const { quizFetchState, quizzesFetchState } = useAppSelector(
    (state) => state.quizzes
  );

  const { name, image, description, _id } = useQuiz();

  useEffect(() => {
    dispatch(quizzesAdded());
  }, [dispatch]);

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
      return { backgroundColor: '#5450c9', flex: '1 0 90%' };
    }
  }, [menuIsActive, image]);

  return (
    <BackgroundContainer
      justifyContent="initial"
      className="Show__background-container"
      isLoading={quizFetchState}
    >
      <div className="Show">
        <div style={displayQuizImage()} className="Show__image" />

        <div className="Show__playarea">
          <h1 className="Show__title">{name}</h1>
          <p className="Show__description">{description}</p>
          {quizFetchState === 'fulfilled' && (
            <button
              className="Show__button"
              onClick={handlePlay}
              style={{ marginTop: description && 24 }}
              type="button"
            >
              Play
            </button>
          )}
        </div>
        <QuizList
          className="Show__list"
          label="Other quizzes"
          type="mostPlayed"
        />
        <HoldLoading isLoading={[quizFetchState, quizzesFetchState]} />
      </div>
    </BackgroundContainer>
  );
};

export default Show;
