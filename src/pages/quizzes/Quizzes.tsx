import React, { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import BackgroundContainer from 'components/main/background-container';
import FetchError from 'components/common/fetch-error/FetchError';
import SearchQuizzes from 'components/common/search-quizzes/SearchQuizzes';
import { selectQuizReducer } from 'slices/quizzes-slice';
import {
  quizzesAdded,
  searchQuizzes,
} from 'slices/quizzes-slice/async-actions';
import { useAppSelector, useAppDispatch } from 'store';
import { Location } from 'history';
import Categories from './components/Categories';
import QuizList from './components/QuizList';
import QuizzesSearched from './components/QuizzesSearched';
import Recommended from './components/Recommended';

type Props = {
  location: Location;
};

const Quizzes = ({ location }: Props) => {
  const dispatch = useAppDispatch();
  const { quizzesFetchState, query } = useAppSelector(selectQuizReducer);
  useEffect(() => {
    if (query === '') {
      dispatch(quizzesAdded());
    } else {
      dispatch(searchQuizzes(location.search.substring(3)));
    }
  }, [query]);

  return (
    <BackgroundContainer
      justifyContent="normal"
      alignItems="center"
      overflow="visible"
    >
      <>
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
          <SearchQuizzes />
          {quizzesFetchState === 'fulfilled' && (
            <>
              <Recommended />
              <QuizList label="Most played" type="mostPlayed" />
              <Categories />
            </>
          )}
          {quizzesFetchState === 'rejected' && (
            <FetchError fetch={quizzesAdded} />
          )}
          {query !== '' && <QuizzesSearched />}
        </div>
      </>
    </BackgroundContainer>
  );
};
export default Quizzes;
