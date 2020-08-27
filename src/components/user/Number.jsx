import React from 'react';
import PropTypes from 'prop-types';

const Number = ({ icon: Icon, label, description }) => (
  <li className="User__numbers">
    <Icon color="#5a5a72" size={19} />
    <div className="User__label">{label}</div>
    <p className="User__description">{description}</p>
  </li>
);

Number.propTypes = {
  label: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Number;
