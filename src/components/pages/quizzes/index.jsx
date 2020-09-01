import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';

import BackgroundContainer from '../../backgroundcontainer';
import {
  getQuizzes,
  searchQuizzes,
  getRecommendedQuiz,
} from '../../../async-actions';
import FetchError from '../../FetchError';
import SearchQuizzes from '../../SearchQuizzes';
import Categories from './Categories';
import Recommended from './Recommended';
import QuizList from './QuizList';
import QuizzesSearched from './QuizzesSearched';
import { selectQuizReducer } from '../../../slices/quizzes-slice';

const Quizzes = ({ location }) => {
  const dispatch = useDispatch();
  const { quizzesFetchState, query, recommendedQuizFetchState } = useSelector(
    selectQuizReducer
  );
  const { recommended } = useSelector((state) => state.quizzesReducer.quizzes);
  useEffect(() => {
    if (query === '') {
      dispatch(getRecommendedQuiz());
      // get recommended, see what it's id and get quizzes without that id
      dispatch(getQuizzes(recommended._id));
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
        {recommendedQuizFetchState === 'fulfilled' && (
          <Recommended recommended={recommended} />
        )}
        {quizzesFetchState === 'fulfilled' && (
          <QuizList label="Most played" type="mostPlayed" />
        )}
        <Categories />
        {quizzesFetchState === 'error' && (
          <FetchError fetchFunction={getQuizzes} />
        )}
        {query !== '' && <QuizzesSearched />}
      </div>
    </BackgroundContainer>
  );
};

Quizzes.propTypes = {
  location: PropTypes.object,
};

Quizzes.defaultProps = {
  location: {},
};

export default Quizzes;
