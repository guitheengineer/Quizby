import React, { useEffect, useState, ChangeEvent } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { useAppSelector, useAppDispatch } from 'store';
import { selectQuizReducer, setQuery } from 'slices/quizzes-slice';
import { selectGeneralReducer, changeMenu } from 'slices/general-slice';
import './search-quizzes.scss';

type Props = {
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
};

const SearchQuizzes = ({ className, inputClassName, iconClassName }: Props) => {
  const dispatch = useAppDispatch();
  const [menuSearched, setMenuSearched] = useState(false);

  const { query, quizSearchFetchState, quizzesFetchState } = useAppSelector(
    selectQuizReducer
  );
  const { menuIsActive } = useAppSelector(selectGeneralReducer);

  const history = useHistory();

  const searchText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setQuery(value));
    history.push(`/quizzes/search?q=${value}`);
    if (menuIsActive) {
      dispatch(changeMenu({ type: 'menuIsActive', isActive: false }));
    }
  };

  useEffect(() => {
    let value: string;
    const linkQuery = decodeURI(window.location.search.substring(3));
    if (linkQuery && !query) {
      value = linkQuery;
    } else {
      value = query;
    }
    dispatch(setQuery(value));
  }, [dispatch, query]);

  useEffect(() => {
    if (!menuIsActive && query.length) {
      setMenuSearched(true);
    }
  }, [query.length, menuIsActive]);

  return (
    <div className={`Search-quizzes ${className}`}>
      <FontAwesomeIcon
        className={`Search-quizzes__icon ${iconClassName}`}
        icon={faSearch}
      />
      <input
        className={`Search-quizzes__input ${inputClassName}`}
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
          right: 15px;
        `}
        size={18}
        loading={
          (quizzesFetchState === 'pending' && query === '') ||
          (quizSearchFetchState === 'pending' && query !== '')
        }
        color={!menuIsActive ? '#5255CA' : 'white'}
      />
    </div>
  );
};

export default SearchQuizzes;
