import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/header';
import { verifyUser } from '../asyncActions';
import { selectUserReducer } from '../slices/userSlice';

export default function PrivateRouteUser({
  showlogo,
  style,
  title,
  component: Component,
  ...rest
}) {
  const dispatch = useDispatch();
  const { isAuthenticated, checkAuth, username } = useSelector(
    selectUserReducer
  );
  const usernamePath = window.location.pathname.split('/').splice(2, 1)[0];

  useEffect(() => {
    document.title = title;

    const token = localStorage.getItem('TOKEN');
    dispatch(verifyUser(token));
  }, []);

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
}

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
