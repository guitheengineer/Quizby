import React from 'react';
import './four-hundred-four.scss';
import { Link } from 'react-router-dom';
import fourZeroFour from 'assets/error-images/404.png';
import BackgroundContainer from 'components/main/background-container';

const FourHundredFour = () => (
  <BackgroundContainer>
    <div className="fourhundred">
      <div className="fourhundred--illustration">
        <img alt="" src={fourZeroFour} />
        404
      </div>
      <p className="fourhundred--message">This page doesn&apos;t exists</p>
      <Link to="/quizzes">
        <button type="button" className="fourhundred--button">
          Go home
        </button>
      </Link>
    </div>
  </BackgroundContainer>
);

export default FourHundredFour;
