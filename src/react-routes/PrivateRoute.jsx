import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/header';
import setDocumentTitle from './setDocumentTitle';
import setVerifyUser from './setVerifyUser';

const PrivateRoute = ({
  showlogo,
  style,
  title,
  component: Component,
  ...rest
}) => {
  setDocumentTitle(title);
  const { isAuthenticated, checkAuth } = setVerifyUser();
  return (
    checkAuth && (
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
    )
  );
};

PrivateRoute.propTypes = {
  showlogo: PropTypes.bool,
  component: PropTypes.func.isRequired,
  title: PropTypes.string,
  style: PropTypes.object,
  location: PropTypes.object,
};

PrivateRoute.defaultProps = {
  showlogo: true,
  title: 'Quizby',
  style: {},
  location: {},
};

export default PrivateRoute;
