import { useCallback } from 'react';
import { useAppSelector } from 'store';
import { QuizClient } from 'types';
import ButtonQuiz from './ButtonQuiz';

type Props = {
  type: 'mostPlayed' | 'quizzesSearchedData' | 'category';
  label?: string;
  className?: string;
};

const QuizList = ({ type, label, className = '' }: Props) => {
  const quizData = useAppSelector((state) => state.quizzes.quizzes[type]);

  const chooseFetchState = useCallback(() => {
    switch (type) {
      case 'category':
        return 'categoryFetchState';

      case 'mostPlayed':
      case 'quizzesSearchedData':
        return 'quizFetchState';
    }
  }, [type]);

  const fetchState = useAppSelector(
    (state) => state.quizzes[chooseFetchState()]
  );

  return (
    <div className={`Quizzes__list ${className}`}>
      <span>{label}</span>
      <div className="Quizzes__list-container">
        {fetchState === 'fulfilled' &&
          quizData.length > 0 &&
          quizData.map((quiz: QuizClient) => (
            <ButtonQuiz
              titleClassName="Quizzes__title"
              key={quiz._id}
              quiz={quiz}
            />
          ))}
        {fetchState === 'pending' &&
          [...Array(4)].map((_, i) => <ButtonQuiz key={i} />)}
      </div>
    </div>
  );
};

export default QuizList;
