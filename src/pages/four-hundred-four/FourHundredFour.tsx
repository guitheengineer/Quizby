import React from 'react';
import { Link } from 'react-router-dom';
import fourZeroFour from 'assets/error-images/404.png';
import BackgroundContainer from '../../components/main/background-container';

const FourHundredFour = () => (
  <BackgroundContainer>
    <div className="App__fourhundred">
      <div className="App__fourhundred--illustration">
        <img alt="" src={fourZeroFour} />
        404
      </div>
      <p className="App__fourhundred--message">This page doesn&apos;t exists</p>
      <Link to="/">
        <button type="button" className="App__fourhundred--button">
          Go home
        </button>
      </Link>
    </div>
  </BackgroundContainer>
);

export default FourHundredFour;
