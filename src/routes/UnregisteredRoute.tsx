import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { RouteCustomProps } from '../types';

const UnregisteredRoute = ({
  component: Component,
  ...rest
}: RouteCustomProps) => {
  const token = localStorage.getItem('TOKEN');
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Redirect to="/quizzes" />
        ) : (
          <>
            <Component {...props} />
          </>
        )
      }
    />
  );
};

export default UnregisteredRoute;
