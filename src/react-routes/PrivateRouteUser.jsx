import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/header';
import setDocumentTitle from './setDocumentTitle';
import setVerifyUser from './setVerifyUser';

const PrivateRouteUser = ({
  showlogo,
  style,
  title,
  component: Component,
  ...rest
}) => {
  const usernamePath = window.location.pathname.split('/').splice(2, 1)[0];
  const { isAuthenticated, checkAuth, username } = setVerifyUser();
  setDocumentTitle();

  return (
    checkAuth && (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated && username === usernamePath ? (
            <>
              <Header showlogo style={style} />
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

PrivateRouteUser.propTypes = {
  showlogo: PropTypes.string,
  style: PropTypes.object,
  component: PropTypes.func.isRequired,
  title: PropTypes.string,
  location: PropTypes.object,
};

PrivateRouteUser.defaultProps = {
  showlogo: 'true',
  style: {},
  title: 'Quizby',
  location: {},
};

export default PrivateRouteUser;
