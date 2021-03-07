import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentQuiz, setQuery } from 'slices/quizzes-slice';
import { QuizClient } from 'types';
import './button-quiz.scss';
import { useQuizBackground } from 'utils';

type Props = {
  quiz?: QuizClient;
  className?: string;
  titleClassName?: string;
};

const ButtonQuiz = ({ quiz, className = '', titleClassName = '' }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const quizClicked = () => {
    if (quiz?.name && quiz._id) {
      history.push(`/quizzes/show/${quiz._id}`);
      dispatch(getCurrentQuiz(quiz._id));
    }
    dispatch(setQuery(''));
  };

  const getQuizBackground = useQuizBackground(quiz);

  return quiz ? (
    <button
      className={`Button-quiz ${className}`}
      style={getQuizBackground()}
      type="button"
      onClick={quizClicked}
    >
      <span className={`Button-quiz__title ${titleClassName}`}>
        {quiz.name}
      </span>
    </button>
  ) : (
    <button type="button" disabled className="Button-quiz" />
  );
};

export default ButtonQuiz;
