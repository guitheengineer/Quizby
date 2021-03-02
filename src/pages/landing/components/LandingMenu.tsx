import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeMenu, selectGeneralReducer } from 'slices/general-slice';
import { resetUser } from 'slices/user-slice';
import { useAppDispatch, useAppSelector } from 'store';
import './landing-menu.scss';

const LandingMenuItem = ({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) => {
  const dispatch = useDispatch();
  return (
    <Link
      onClick={() =>
        dispatch(changeMenu({ type: 'isLandingMenuActive', isActive: false }))
      }
      to={link}
    >
      <li className="landing-menu__item">{children}</li>
    </Link>
  );
};

const LandingMenu = () => {
  const dispatch = useAppDispatch();
  const { isLandingMenuActive } = useAppSelector(selectGeneralReducer);
  const username = localStorage.getItem('USERNAME');

  return isLandingMenuActive ? (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          dispatch(
            changeMenu({ type: 'isLandingMenuActive', isActive: false })
          );
        }
      }}
      className="landing-menu"
    >
      <ul>
        {username ? (
          <>
            <LandingMenuItem link={`/user/${username}`}>
              Profile
            </LandingMenuItem>
            <LandingMenuItem link={`/user/${username}/createquiz`}>
              Create quizzes
            </LandingMenuItem>
            <LandingMenuItem link="/quizzes">Quizzes</LandingMenuItem>
            <Link
              to="/"
              onClick={() => {
                localStorage.removeItem('TOKEN');
                localStorage.removeItem('USER');
                localStorage.removeItem('USERNAME');
                dispatch(resetUser());
              }}
            >
              <li className="landing-menu__item">Quit</li>
            </Link>
          </>
        ) : (
          <>
            <LandingMenuItem link="/signup">Signup</LandingMenuItem>
            <LandingMenuItem link="/login">Login</LandingMenuItem>
            <LandingMenuItem link="/quizzes">Quizzes</LandingMenuItem>
          </>
        )}
      </ul>
    </div>
  ) : null;
};

export default LandingMenu;
