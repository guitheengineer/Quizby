import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const logoShouldAppear = useSelector(
    (data) => data.rootReducer.logoShouldAppear
  );
  return (
    <div className="App__header">
      {logoShouldAppear && (
        <Link style={{ textDecoration: 'none' }} to="/">
          <span className="App__header--title">Lorem ipsum</span>
        </Link>
      )}
    </div>
  );
}

export default Header;
