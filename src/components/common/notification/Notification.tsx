import React from 'react';
import { AsyncThunk } from '@reduxjs/toolkit';
import { QuizForm as QuizFormType } from 'types';
import QuizForm from '../quiz-form';

type Props = {
  message?: string;
  callback: any;
};

const Notification = ({
  callback,
  message = 'An error has ocurred, try again later',
}: Props) => {
  return (
    <div className="Notification" onAnimationEnd={() => callback()}>
      <div className="Notification__container">
        <p className="Notification__error">Error</p>
        <p className="Notification__message">{message}</p>
      </div>
    </div>
  );
};

export default Notification;
