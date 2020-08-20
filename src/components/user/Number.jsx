import React from 'react';
import PropTypes from 'prop-types';

function Stats({ icon: Icon, label, description }) {
  return (
    <li className="User__numbers">
      <Icon color="#5a5a72" size={22} />
      <div className="User__label">{label}</div>
      <p className="User__description">{description}</p>
    </li>
  );
}

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Stats;
