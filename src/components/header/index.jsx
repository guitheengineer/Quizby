import React from 'react';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function RouteWithHeader({ showlogo, component: Component }) {
  return (
    <Route
      render={(props) => (
        <>
          <div className="App__header">
            {showlogo && (
              <Link style={{ textDecoration: 'none' }} to="/">
                <span className="App__header--title">Lorem ipsum</span>
              </Link>
            )}
          </div>
          <Component {...props} />
        </>
      )}
    />
  );
}

RouteWithHeader.propTypes = {
  showlogo: PropTypes.bool,
  component: PropTypes.func.isRequired,
};

RouteWithHeader.defaultProps = {
  showlogo: true,
};

export default RouteWithHeader;
