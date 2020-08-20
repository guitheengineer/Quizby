import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/header';
import { verifyUser } from '../asyncActions';
import { selectUserReducer } from '../slices/userSlice';

function PrivateRoute({
  showlogo,
  style,
  title,
  component: Component,
  ...rest
}) {
  const dispatch = useDispatch();
  const { isAuthenticated, checkAuth } = useSelector(selectUserReducer);

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
}

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
