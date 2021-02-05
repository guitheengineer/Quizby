import React from 'react';
import './presentation.scss';

type Props = { title: string; description: string; marginTop?: string };

const Presentation = ({ title, description, marginTop = '0px' }: Props) => {
  return (
    <div style={{ marginTop }} className="Presentation">
      <p className="Presentation__title">{title}</p>
      <p className="Presentation__description">{description}</p>
    </div>
  );
};

export default Presentation;
