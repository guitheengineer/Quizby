import React from 'react';
import { Link } from 'react-router-dom';
import '../components/landing-menu.scss';

const LandingMenu = () => {
  {
    /*to-do: if user clicks on anything thats is not a list item, close menu */
  }

  return (
    <div onClick={() => console.log('click')} className="landing-menu">
      <ul>
        <Link to={`/user/${localStorage.getItem('USERNAME')}`}>
          <li className="landing-menu__item">Profile</li>
        </Link>

        <li className="landing-menu__item">Signup</li>
        <li className="landing-menu__item">Profile</li>
        <li className="landing-menu__item">Login</li>
      </ul>
    </div>
  );
};

export default LandingMenu;
