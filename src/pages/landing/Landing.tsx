import React from 'react';
import { Link } from 'react-router-dom';
import { Section, QuizDemo } from './components';
import PlayDemo from './components/PlayDemo';

const Landing = () => {
  return (
    <div className="Landing">
      <section>
        <h1 className="Landing__section-heading">Test your knowledge today</h1>
        <QuizDemo style={{ marginTop: '34px' }} />
        <Link to="/quizzes">
          <button className="Landing__section-button">See quizzes</button>
        </Link>
      </section>

      <section>
        <h1 className="Landing__section-heading">
          Create custom quizzes and invite your friends to play
        </h1>
        <PlayDemo />
        <Link to="/signup">
          <button className="Landing__section-button">Create an account</button>
        </Link>
      </section>
      {/*
      <Section
        title="Search for quizzes and get recommended ones"
        buttonTitle="Search for quizzes"
        link="/quizzes"
      /> */}
    </div>
  );
};

export default Landing;
