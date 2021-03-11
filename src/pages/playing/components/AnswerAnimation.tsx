import { useAppSelector } from 'store';
import correct from 'assets/icons/correct.svg';
import wrong from 'assets/icons/wrong.svg';
import './answer-animation.scss';

const AnswerAnimation = () => {
  const { userAnsweredCorrect } = useAppSelector((state) => state.quizzes);

  return userAnsweredCorrect ? (
    <img src={correct} className="Answer-animation" alt="Correct answer" />
  ) : (
    <img src={wrong} className="Answer-animation" alt="Wrong answer" />
  );
};

export default AnswerAnimation;
