import { useAppSelector } from 'store';
import ButtonQuiz from './ButtonQuiz';

const Recommended = () => {
  const {
    quizzes: { recommended },
  } = useAppSelector((state) => state.quizzes);
  return (
    <div className="Quizzes__recommended">
      <span>Recommended</span>
      <div className="Quizzes__recommended-wrapper">
        <ButtonQuiz className="Button-quiz--recommended" quiz={recommended} />
      </div>
    </div>
  );
};

export default Recommended;
