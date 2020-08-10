import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonQuiz from './ButtonQuiz';
import { getRecommendedQuiz } from '../../asyncActions';

function Recommended() {
  const dispatch = useDispatch();
  const { recommended } = useSelector((state) => state.quizzesReducer.quizzes);

  const { recommendedQuizFetchState } = useSelector(
    (state) => state.quizzesReducer
  );

  useEffect(() => {
    dispatch(getRecommendedQuiz());
  }, []);
  return (
    recommendedQuizFetchState === 'fulfilled' && (
      <div className="Quizzes__recommended">
        <span>Recommended</span>
        <ButtonQuiz quiz={recommended} />
      </div>
    )
  );
}

export default Recommended;
