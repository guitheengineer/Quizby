import React from 'react';
import '../header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faSignOutAlt,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import SearchQuizzes from '../../../common/search-quizzes/SearchQuizzes';
import { Link, useHistory } from 'react-router-dom';

const Menu = () => {
  const history = useHistory();
  const handleQuit = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className="Header__menu">
      <SearchQuizzes iconClassName="Search-quizzes__icon--menu" />
      <div className="Header__list">
        <Link
          className="Header__item"
          to={`/user/${localStorage.getItem('USERNAME')}`}
        >
          <li>
            <FontAwesomeIcon className="Header__svg" icon={faUser} />
            Profile
          </li>
        </Link>
        <Link className="Header__item" to="">
          <li>
            <FontAwesomeIcon className="Header__svg" icon={faChartLine} />
            Statistics
          </li>
        </Link>
        <Link className="Header__item" to="">
          <li onClick={handleQuit}>
            <FontAwesomeIcon className="Header__svg" icon={faSignOutAlt} />
            Quit
          </li>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
