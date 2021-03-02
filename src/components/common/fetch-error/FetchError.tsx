import React, { ReactNode } from 'react';
import './fetch-error.scss';
import { useAppDispatch } from 'store';
import fetchError from 'assets/error-images/fetch-error.png';
import { useHistory } from 'react-router-dom';
import { ThunkResponses } from 'types';

type Props = {
  fetch?: any;
  fetchState?: ThunkResponses;
  type?: 'fetch' | 'common';
  message?: string;
  btnMessage?: string;
  children?: ReactNode;
  className?: string;
};

const FetchError = ({
  fetch,
  fetchState = 'rejected',
  type = 'fetch',
  btnMessage = 'Try again',
  children = 'Sorry, an error ocurred',
  className = '',
}: Props) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  return fetchState === 'rejected' ? (
    <div className={`Fetch-error ${className}`}>
      <img className="Fetch-error__illustration" alt="error" src={fetchError} />
      <p className="Fetch-error__message">{children}</p>
      <button
        type="button"
        onClick={() => {
          if (type === 'fetch') {
            dispatch(fetch());
          } else {
            history.push('/');
          }
        }}
        className="Fetch-error__button"
      >
        {btnMessage}
      </button>
    </div>
  ) : null;
};

export default FetchError;
