import React, { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { setQuery, selectQuizReducer } from '../slices/quizzes-slice';
import { changeMenu } from '../slices/general-slice';
import { setMenuIsActive } from '../customhooks';

const SearchQuizzes = () => {
  const [menuSearched, setMenuSearched] = useState(false);

  const { query, quizSearchFetchState } = useSelector(selectQuizReducer);
  const menuIsActive = setMenuIsActive();

  const dispatch = useDispatch();
  const history = useHistory();

  function searchText(e) {
    dispatch(setQuery(e.target.value));
    history.push(`/quizzes/search?q=${e.target.value}`);
    if (menuIsActive === true) {
      dispatch(changeMenu(false));
    }
  }

  useEffect(() => {
    if (menuIsActive === false && query.length > 0) {
      setMenuSearched(true);
    }
  }, [query]);

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

  return (
    <div className="Quizzes__search">
      <FontAwesomeIcon icon={faSearch} />
      <input
        value={query}
        key="searchquiz"
        ref={(input) => {
          if (input && menuSearched) input.focus();
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
};

export default SearchQuizzes;
