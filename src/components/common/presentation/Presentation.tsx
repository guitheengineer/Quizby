import React from 'react';

type Props = { title: string; description: string; marginTop: string };

const Presentation = ({ title, description, marginTop = '0px' }: Props) => {
  return (
    <div style={{ marginTop }} className="App__presentation">
      <p className="App__presentation--title">{title}</p>
      <p className="App__presentation--description">{description}</p>
    </div>
  );
};

export default Presentation;
