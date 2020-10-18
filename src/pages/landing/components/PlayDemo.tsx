import React from 'react';

const PlayDemo = () => {
  const name = 'Soccer player names';
  const description = 'Can you guess what’s this player name?';
  return (
    <div className="Show__playarea">
      <h1>{name}</h1>
      <p>{description}</p>
      <button style={{ marginTop: description && '2.4rem' }} type="button">
        Play
      </button>
    </div>
  );
};

export default PlayDemo;
