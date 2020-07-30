import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faSearch,
  faSignOutAlt,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

function Menu() {
  return (
    <div className="App__menu">
      <div>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search for quizzes" />
      </div>
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
}

export default Menu;
