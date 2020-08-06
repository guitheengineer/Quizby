import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/header';
import { verifyUser } from '../asyncActions';

function PrivateRoute({ showlogo, title, component: Component, ...rest }) {
  const dispatch = useDispatch();
  const { isAuthenticated, checkAuth } = useSelector(
    (data) => data.userReducer
  );
  console.log('private route is rendering');
  useEffect(() => {
    document.title = title;

    const token = localStorage.getItem('TOKEN');
    console.log('token exists');
    dispatch(verifyUser(token));
  }, []);
  return (
    checkAuth && (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <>
              <Header showlogo={showlogo} />
              <Component {...props} />
            </>
          ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
        }
      />
    )
  );
}

PrivateRoute.propTypes = {
  showlogo: PropTypes.bool,
  component: PropTypes.func.isRequired,
  title: PropTypes.string,
  location: PropTypes.object,
};

PrivateRoute.defaultProps = {
  showlogo: false,
  title: 'Quizby',
  location: {},
};

export default PrivateRoute;
