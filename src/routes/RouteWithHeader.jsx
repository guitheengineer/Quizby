import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/header';

function RouteWithHeader({
  showlogo,
  style,
  title,
  component: Component,
  ...rest
}) {
  useEffect(() => {
    document.title = title;
  }, []);
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
}

RouteWithHeader.propTypes = {
  showlogo: PropTypes.bool,
  component: PropTypes.func.isRequired,
  title: PropTypes.string,
  style: PropTypes.object,
};

RouteWithHeader.defaultProps = {
  showlogo: true,
  title: 'Quizby',
  style: {},
};

export default RouteWithHeader;
