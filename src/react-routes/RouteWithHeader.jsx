import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/header';
import setDocumentTitle from './setDocumentTitle';

const RouteWithHeader = ({
  showlogo,
  style,
  title,
  component: Component,
  ...rest
}) => {
  setDocumentTitle();

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
