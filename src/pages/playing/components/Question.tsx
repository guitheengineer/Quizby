import './question.scss';
import { useAppSelector } from 'store';

const Question = () => {
  const {
    currentQuiz,
    currentQuestion,
    currentQuestionAnswered,
  } = useAppSelector((state) => state.quizzes);
  const { question } = currentQuiz.questions[currentQuestion];
  return (
    <div
      style={
        question.length <= 25
          ? {
              marginBottom: 10,
              fontSize: 'clamp(20px, 6vw, 24px)',
            }
          : undefined
      }
      className={`Question ${
        currentQuestionAnswered
          ? 'slideOutLeftQuestion'
          : 'slideInRightQuestion'
      }`}
    >
      <span className="Question__before">-</span>
      {question}
    </div>
  );
};

export default Question;
