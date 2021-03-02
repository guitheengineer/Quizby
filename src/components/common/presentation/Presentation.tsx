import React from 'react';
import LandingIconMenu from 'pages/landing/components/LandingIconMenu';
import LandingMenu from 'pages/landing/components/LandingMenu';
import './presentation.scss';

type Props = { title: string; description: string; marginTop?: string };

const Presentation = ({ title, description, marginTop }: Props) => {
  return (
    <>
      <LandingMenu />
      <div style={{ marginTop }} className="Presentation">
        <p className="Presentation__title">{title}</p>
        <p className="Presentation__description">{description}</p>
        <LandingIconMenu className="Presentation__menu" />
      </div>
    </>
  );
};

export default Presentation;
