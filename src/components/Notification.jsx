import React from 'react';
import PropTypes from 'prop-types';

function Notification({ callbackfunction, message }) {
  return (
    <div className="Notification" onAnimationEnd={() => callbackfunction()}>
      <div className="Notification__container">
        <p className="Notification__error">Error</p>
        <p className="Notification__message">{message}</p>
      </div>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  callbackfunction: PropTypes.func,
};

Notification.defaultProps = {
  callbackfunction: () => {},
};

export default Notification;
