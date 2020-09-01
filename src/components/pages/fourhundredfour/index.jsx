import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundContainer from '../../backgroundcontainer';

const FourHundredFour = () => {
  return (
    <BackgroundContainer>
      <div className="App__fourhundred">
        <div className="App__fourhundred--illustration">
          <img alt="" src="./404illustration.png" />
          404
        </div>
        <p className="App__fourhundred--message">
          This page doesn&apos;t exists
        </p>
        <Link to="/">
          <button type="button" className="App__fourhundred--button">
            Go home
          </button>
        </Link>
      </div>
    </BackgroundContainer>
  );
};

export default FourHundredFour;
