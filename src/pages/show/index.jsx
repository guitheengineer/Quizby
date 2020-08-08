import React from 'react';
import { useSelector } from 'react-redux';
import BackgroundContainer from '../../components/backgroundcontainer';
import MostPlayed from '../../components/quizzes/MostPlayed';

function Show() {
  const menuIsActive = useSelector((data) => data.generalReducer.menuIsActive);
  return (
    <div className="Show">
      <div
        style={{ background: menuIsActive && '#5255ca' }}
        className="Show__image"
      />
      <BackgroundContainer
        justifyContent="normal"
        alignItems="center"
        overflow="normal"
      >
        <div className="Show__playarea">
          <h1>How much weed snoop dogg has been smoking?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adispicing elit. Dem lorem
            ipsum. Delamor jicuti piri domoseti.
          </p>
          <button type="button">Play</button>
        </div>
        <MostPlayed />
        {/* This mostplayed has to be a flexible component capable of serving chosen queries and titles */}
      </BackgroundContainer>
    </div>
  );
}

export default Show;
