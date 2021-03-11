import FetchError from 'components/common/fetch-error/FetchError';
import LoaderSpinner from 'components/common/loader-spinner/LoaderSpinner';
import BackgroundContainer from 'components/main/background-container';
import { getCurrentQuiz } from 'slices/quizzes-slice';
import { useAppSelector } from 'store';
import IconAnswers from './IconAnswers';
import Question from './Question';
import Answers from './Answers';

const Game = () => {
  const { quizFetchState, currentQuestionAnswered } = useAppSelector(
    (state) => state.quizzes
  );
  return (
    <BackgroundContainer>
      <div className={`Playing ${currentQuestionAnswered && 'fade'}`}>
        <LoaderSpinner loadingState={quizFetchState} />
        {quizFetchState === 'fulfilled' ? (
          <>
            <IconAnswers />
            <Question />
            <Answers />
          </>
        ) : quizFetchState === 'rejected' ? (
          <FetchError fetch={getCurrentQuiz} />
        ) : null}
      </div>
    </BackgroundContainer>
  );
};

export default Game;
