import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/header';

function RouteWithHeader({ showlogo, title, component: Component, ...rest }) {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header showlogo={showlogo} />
          <Component {...props} />
        </>
      )}
    />
  );
}

RouteWithHeader.propTypes = {
  showlogo: PropTypes.bool,
  component: PropTypes.func.isRequired,
  title: PropTypes.string,
};

RouteWithHeader.defaultProps = {
  showlogo: false,
  title: 'Quizby',
};

export default RouteWithHeader;
