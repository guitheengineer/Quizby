import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuIcon from '../menuicon';

function Header({ showlogo, style }) {
  return showlogo ? (
    <div style={style} className="App__header">
      <Link style={{ textDecoration: 'none' }} to="/">
        <span className="App__header--title">Lorem ipsum</span>
      </Link>
      <MenuIcon />
    </div>
  ) : (
    <div style={{ marginTop: '4rem' }} />
  );
}

Header.propTypes = {
  showlogo: PropTypes.bool,
  style: PropTypes.object,
};

Header.defaultProps = {
  showlogo: false,
  style: {},
};

export default Header;
