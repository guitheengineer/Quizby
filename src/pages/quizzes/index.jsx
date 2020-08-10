import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { Route } from 'react-router-dom';
import BackgroundContainer from '../../components/backgroundcontainer';
import { getQuizzes, searchQuizzes } from '../../asyncActions';
import FetchError from '../../components/FetchError';
import SearchQuizzes from '../../components/SearchQuizzes';
import Categories from '../../components/quizzes/Categories';
import Recommended from '../../components/quizzes/Recommended';
import QuizList from '../../components/quizzes/QuizList';
import QuizzesSearched from '../../components/quizzes/QuizzesSearched';
import { selectQuizReducer } from '../../slices/quizzesSlice';

function Quizzes() {
  const dispatch = useDispatch();
  const { quizzesFetchState, query } = useSelector(selectQuizReducer);

  useEffect(() => {
    if (query === '') {
      dispatch(getQuizzes());
    } else {
      dispatch(searchQuizzes(window.location.search.substring(3)));
    }
  }, [query]);

  function shouldQuizzesListAppear() {
    if (quizzesFetchState === 'fulfilled' && query === '') {
      return (
        <>
          <Recommended />
          <QuizList type="mostPlayed" />
          <Categories />
        </>
      );
    }
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
        {shouldQuizzesListAppear()}
        {shouldQuizzesSearchAppear()}
      </div>
    </BackgroundContainer>
  );
}

export default Quizzes;
