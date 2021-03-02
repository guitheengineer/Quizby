import React, { ReactNode } from 'react';
import '../header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faSignOutAlt,
  faPlusSquare,
  faGamepad,
  faUserPlus,
  faSignInAlt,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import SearchQuizzes from 'components/common/search-quizzes/SearchQuizzes';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeMenu } from 'slices/general-slice';
import { useAppDispatch } from 'store';
import { resetUser } from 'slices/user-slice';

const MenuItem = ({
  link,
  icon,
  children,
}: {
  link: string;
  icon: IconDefinition;
  children: ReactNode;
}) => (
  <Link className="Header__item" to={link}>
    <FontAwesomeIcon className="Header__svg" icon={icon} />
    <span className="Header__item-title">{children}</span>
  </Link>
);

const MenuItemQuizzes = () => {
  const dispatch = useDispatch();

  return (
    <Link
      onClick={() => {
        dispatch(changeMenu({ type: 'menuIsActive', isActive: false }));
      }}
      className="Header__item"
      to="/quizzes"
    >
      <FontAwesomeIcon className="Header__svg" icon={faGamepad} />
      <span className="Header__item-title">Quizzes</span>
    </Link>
  );
};

const Menu = () => {
  const username = localStorage.getItem('USERNAME');
  const dispatch = useAppDispatch();
  return (
    <div className="Header__menu">
      <SearchQuizzes iconClassName="Search-quizzes__icon--menu" />
      <div className="Header__list">
        {username ? (
          <>
            <MenuItem icon={faUser} link={`/user/${username}`}>
              Profile
            </MenuItem>
            <MenuItemQuizzes />
            <MenuItem icon={faPlusSquare} link={`/user/${username}/createquiz`}>
              Create quiz
            </MenuItem>
            <Link
              to="/"
              onClick={() => {
                localStorage.removeItem('TOKEN');
                localStorage.removeItem('USER');
                localStorage.removeItem('USERNAME');
                dispatch(resetUser());
              }}
              className="Header__item"
            >
              <FontAwesomeIcon className="Header__svg" icon={faSignOutAlt} />
              <span className="Header__item-title">Quit</span>
            </Link>
          </>
        ) : (
          <>
            <MenuItem icon={faUserPlus} link="/signup">
              Signup
            </MenuItem>
            <MenuItem icon={faSignInAlt} link="/login">
              Login
            </MenuItem>
            <MenuItemQuizzes />
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
