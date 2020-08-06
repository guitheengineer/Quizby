import React, { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { setQuery } from '../slices/quizzesSlice';
import { changeMenu } from '../slices/generalSlice';

function SearchQuizzes() {
  const [menuSearchHappened, setMenuSearchHappened] = useState(false);

  const { query, quizSearchFetchState } = useSelector(
    (data) => data.quizzesReducer
  );
  const menuIsActive = useSelector((data) => data.generalReducer.menuIsActive);

  const dispatch = useDispatch();
  const history = useHistory();

  function searchText(e) {
    dispatch(setQuery(e.target.value));
    if (menuIsActive === true) {
      dispatch(changeMenu(false));
    }
  }

  useEffect(() => {
    let value;
    const linkQuery = decodeURI(window.location.search.substring(3));
    if (linkQuery !== '' && query === '') {
      value = linkQuery;
    } else {
      value = query;
    }
    dispatch(setQuery(value));
  }, []);

  useEffect(() => {
    history.push(`/quizzes/search?q=${query}`);
    if (menuIsActive === false) setMenuSearchHappened(true);
  }, [query]);

  return (
    <div className="Quizzes__search">
      <FontAwesomeIcon icon={faSearch} />
      <input
        value={query}
        ref={(input) => {
          if (menuSearchHappened && input) input.focus();
        }}
        type="text"
        onChange={searchText}
        placeholder="Search for quizzes"
      />
      <ClipLoader
        css={`
          position: absolute;
          right: 1.5rem;
        `}
        size="1.8rem"
        loading={quizSearchFetchState === 'loading' && query !== ''}
        color="#5255CA"
      />
    </div>
  );
}

export default SearchQuizzes;
