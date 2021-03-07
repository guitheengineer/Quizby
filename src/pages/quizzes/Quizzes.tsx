import { useEffect } from 'react';
import './quizzes.scss';
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
import { Categories } from 'components/common/categories';
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
    if (!query) {
      dispatch(quizzesAdded());
    } else {
      dispatch(searchQuizzes(location.search.substring(3)));
    }
  }, [query, dispatch, location.search]);

  return (
    <BackgroundContainer
      justifyContent="normal"
      alignItems="center"
      overflow="visible"
      paddingBottom={50}
    >
      <div className="Quizzes">
        <SearchQuizzes
          className="Quizzes__search"
          inputClassName="Quizzes__input"
        />
        {query ? (
          <QuizzesSearched />
        ) : (
          quizzesFetchState === 'fulfilled' && (
            <>
              <Recommended />
              <QuizList label="Most played" type="mostPlayed" />
              <Categories />
            </>
          )
        )}
        <FetchError fetchState={quizzesFetchState} fetch={quizzesAdded} />
      </div>
    </BackgroundContainer>
  );
};
export default Quizzes;
