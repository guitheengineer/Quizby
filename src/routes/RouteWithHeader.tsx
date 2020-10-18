import React from 'react';
import { Route } from 'react-router-dom';
import { RouteCustomProps } from 'types';
import Header from '../components/main/header';
import useDocumentTitle from './hooks/useDocumentTitle';

const RouteWithHeader = ({
  showlogo = true,
  style = {},
  title = 'Quizby',
  component: Component,
  ...rest
}: RouteCustomProps) => {
  useDocumentTitle(title);

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header showlogo={showlogo} style={style} />
          <Component {...props} />
        </>
      )}
    />
  );
};

export default RouteWithHeader;
