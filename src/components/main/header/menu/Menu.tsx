import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faSignOutAlt,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import SearchQuizzes from '../../../common/search-quizzes/SearchQuizzes';

const Menu = () => (
  <div className="Header__menu">
    <SearchQuizzes />
    <ul>
      <li>
        <FontAwesomeIcon icon={faUser} />
        Profile
      </li>
      <li>
        <FontAwesomeIcon icon={faChartLine} />
        Statistics
      </li>
      <li>
        <FontAwesomeIcon icon={faSignOutAlt} />
        Quit
      </li>
    </ul>
  </div>
);

export default Menu;
