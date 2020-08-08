import React from 'react';
import BackgroundContainer from '../../components/backgroundcontainer';
import MostPlayed from '../../components/quizzes/MostPlayed';

function Show() {
  return (
    <div className="Show">
      <div className="Show__image" />
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
      </BackgroundContainer>
    </div>
  );
}

export default Show;
