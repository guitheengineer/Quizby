import React from 'react';
import { Link } from 'react-router-dom';
import '../components/landing-menu.scss';

const LandingMenu = ({ setMenuOpen }: { setMenuOpen: any }) => (
  <div
    onClick={(e) => {
      if (e.target === e.currentTarget) {
        setMenuOpen(false);
      }
    }}
    className="landing-menu"
  >
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

export default LandingMenu;
