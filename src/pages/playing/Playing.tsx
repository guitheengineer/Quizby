import AnswerAnimation from './components/AnswerAnimation';
import Game from './components/Game';
import useQuiz from 'components/hooks/useQuiz';
import './playing.scss';
import { useAppSelector } from 'store';

const Playing = () => {
  useQuiz();
  const { currentQuestionAnswered } = useAppSelector((state) => state.quizzes);
  return (
    <>
      <Game />
      {currentQuestionAnswered ? <AnswerAnimation /> : null}
    </>
  );
};

export default Playing;
