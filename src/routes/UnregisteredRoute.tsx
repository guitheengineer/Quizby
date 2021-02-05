import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import Header from '../components/main/header';
import { RouteCustomProps } from '../types';

const UnregisteredRoute = ({
  showlogo = true,
  style = {},
  title = 'Quizby',
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
            <Header showlogo={showlogo} style={style} />
            <Component {...props} />
          </>
        )
      }
    />
  );
};

export default UnregisteredRoute;
