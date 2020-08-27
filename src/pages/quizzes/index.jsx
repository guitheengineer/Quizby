import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { Route } from 'react-router-dom';
import BackgroundContainer from '../../components/backgroundcontainer';
import {
  getQuizzes,
  searchQuizzes,
  getRecommendedQuiz,
} from '../../asyncActions';
import FetchError from '../../components/FetchError';
import SearchQuizzes from '../../components/SearchQuizzes';
import Categories from '../../components/quizzes/Categories';
import Recommended from '../../components/quizzes/Recommended';
import QuizList from '../../components/quizzes/QuizList';
import QuizzesSearched from '../../components/quizzes/QuizzesSearched';
import { selectQuizReducer } from '../../slices/quizzesSlice';

const Quizzes = () => {
  const dispatch = useDispatch();
  const { quizzesFetchState, query, recommendedQuizFetchState } = useSelector(
    selectQuizReducer
  );
  const { recommended } = useSelector((state) => state.quizzesReducer.quizzes);
  console.log(quizzesFetchState);
  useEffect(() => {
    dispatch(getRecommendedQuiz());
    // get recommended, see what it's id and get quizzes without that id
    if (query === '') {
      if (recommendedQuizFetchState === 'fulfilled') {
        console.log('itsfulfilled');
        dispatch(getQuizzes(recommended._id));
      }
    } else {
      dispatch(searchQuizzes(window.location.search.substring(3)));
    }
  }, [query]);

  function shouldQuizzesListAppear() {
    if (
      recommendedQuizFetchState === 'fulfilled' &&
      quizzesFetchState === 'fulfilled' &&
      query === ''
    )
      return (
        <>
          <QuizList label="Most played" type="mostPlayed" />
          <Categories />
        </>
      );

    if (quizzesFetchState === 'error') {
      return <FetchError fetchFunction={getQuizzes} />;
    }
    return null;
  }

  function shouldSearchAppear() {
    if (quizzesFetchState !== 'error') return <SearchQuizzes />;
    return null;
  }

  function shouldQuizzesSearchAppear() {
    if (query !== '') return <Route render={() => <QuizzesSearched />} />;
    return null;
  }
  return (
    <BackgroundContainer
      justifyContent="normal"
      alignItems="center"
      overflow="visible"
    >
      <ClipLoader
        css={`
          position: absolute;
          top: 46%;
          margin: auto;
        `}
        loading={quizzesFetchState === 'loading' && query === ''}
        color="#5255CA"
      />
      <div className="Quizzes__container">
        {shouldSearchAppear()}
        {recommendedQuizFetchState === 'fulfilled' && (
          <Recommended recommended={recommended} />
        )}
        {shouldQuizzesListAppear()}
        {shouldQuizzesSearchAppear()}
      </div>
    </BackgroundContainer>
  );
};

export default Quizzes;
