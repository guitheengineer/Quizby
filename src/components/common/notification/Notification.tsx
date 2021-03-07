import { useState } from 'react';
import './notification.scss';

type Props = {
  message?: string;
};

const Notification = ({
  message = 'An error has ocurred, try again later',
}: Props) => {
  const [isClosed, setIsClosed] = useState(false);
  return !isClosed ? (
    <div className="notification">
      <div className="notification__container">
        <p className="notification__error">Error</p>
        <p className="notification__message">{message}</p>
        <button
          onClick={() => setIsClosed(true)}
          className="notification__close"
        >
          X
        </button>
      </div>
    </div>
  ) : null;
};

export default Notification;
