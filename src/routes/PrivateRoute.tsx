import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteCustomProps } from 'types';
import Header from '../components/main/header';
import useDocumentTitle from './hooks/useDocumentTitle';
import useVerifyUser from './hooks/useVerifyUser';

const PrivateRoute = ({
  showlogo = true,
  style = {},
  title = 'Quizby',
  component: Component,
  ...rest
}: RouteCustomProps) => {
  useDocumentTitle(title);
  const { isAuthenticated, checkAuth } = useVerifyUser();
  return checkAuth ? (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <Header showlogo={showlogo} style={style} />
            <Component {...props} />
          </>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  ) : null;
};

export default PrivateRoute;
