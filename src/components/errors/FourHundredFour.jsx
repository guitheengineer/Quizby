import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundContainer from '../backgroundcontainer';

export default function FourHundredFour() {
  return (
    <BackgroundContainer>
      <div className="App__fourhundred">
        <div className="App__fourhundred--illustration">
          <img alt="" src="./404illustration.png" />
          404
        </div>
        <p className="App__fourhundred--message">Page not found</p>
        <Link to="/">
          <button type="button" className="App__fourhundred--button">
            Go home
          </button>
        </Link>
      </div>
    </BackgroundContainer>
  );
}
