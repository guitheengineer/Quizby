import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ callbackfunction, message }) => {
  return (
    <div className="Notification" onAnimationEnd={() => callbackfunction()}>
      <div className="Notification__container">
        <p className="Notification__error">Error</p>
        <p className="Notification__message">{message}</p>
      </div>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
  callbackfunction: PropTypes.func,
};

Notification.defaultProps = {
  callbackfunction: () => {},
  message: 'An error has ocurred, try again later',
};

export default Notification;
