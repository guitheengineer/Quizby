import React from 'react';
import './notification.scss';

type Props = {
  message?: string;
};

const Notification = ({
  message = 'An error has ocurred, try again later',
}: Props) => {
  return (
    <div className="Notification">
      <div className="Notification__container">
        <p className="Notification__error">Error</p>
        <p className="Notification__message">{message}</p>
      </div>
    </div>
  );
};

export default Notification;
