import React from 'react';
import PropTypes from 'prop-types';

function Presentation({ title, desc, mgTop }) {
  return (
    <div style={{ marginTop: mgTop }} className="App__presentation">
      <p className="App__presentation--title">{title}</p>
      <p className="App__presentation--desc">{desc}</p>
    </div>
  );
}

Presentation.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  mgTop: PropTypes.string.isRequired,
};

export default Presentation;
