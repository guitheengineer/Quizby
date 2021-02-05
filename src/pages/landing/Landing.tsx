import React, { useState } from 'react';
import './landing.scss';
import { Link } from 'react-router-dom';
import { QuizDemo } from './components';
import LandingQuizzes from './components/LandingQuizzes';
import player99 from '../../assets/stats-player99.png';
import guilhermesnd from '../../assets/stats-guilhermeSND.png';
import searchQuizzesImg from '../../assets/search-quizzes.png';
import { CategoriesList } from '../../components/common/categories';
import LandingMenu from './components/LandingMenu';

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setMenuOpen((prevState) => !prevState)}
        type="button"
        className="menu-icon menu-icon--landing"
      >
        {[...Array(3)].map((e, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div
            key={i}
            className={`menu-icon__bar ${
              menuOpen ? 'menu-icon__bar--clicked' : null
            }`}
          />
        ))}
      </button>
      {menuOpen && <LandingMenu />}
      <div className="Landing">
        <section>
          <h1 className="Landing__section-heading Landing__section-heading--knowledge">
            Test your knowledge today
          </h1>
          <QuizDemo />
          <Link to="/quizzes">
            <button className="Landing__section-button">See quizzes</button>
          </Link>
        </section>

        <section>
          <h1 className="Landing__section-heading Landing__section-heading--custom">
            Create custom quizzes and invite your friends to play
          </h1>
          <LandingQuizzes />
          <Link to="/signup">
            <button className="Landing__section-button">
              Create an account
            </button>
          </Link>
        </section>

        <section>
          <h1 className="Landing__section-heading Landing__section-heading--custom">
            Search for quizzes and get recommended ones
          </h1>
          <img src={searchQuizzesImg} className="Landing__search-quizzes" />
          <Link to="/quizzes">
            <button className="Landing__section-button">
              Search for quizzes
            </button>
          </Link>
        </section>

        <section>
          <h1 className="Landing__section-heading Landing__section-heading--custom">
            See profile stats and info about players
          </h1>
          <div className="Landing__users">
            <img
              src={guilhermesnd}
              alt="user stats"
              className="Landing__user-img"
            />
            <img
              src={player99}
              alt="user stats"
              className="Landing__user-img"
            />
          </div>
        </section>

        <section>
          <h1 className="Landing__section-heading Landing__section-heading--custom">
            Or... choose quizzes by category and have fun!
          </h1>
          <div className="Landing__categories">
            <CategoriesList
              titleClassName="Landing__categories-title"
              buttonClassName="Landing__category"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
