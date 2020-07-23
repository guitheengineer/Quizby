import React from 'react';
import PropTypes from 'prop-types';

function BackgroundContainer({ mgTop, minHeight, children, justifyContent }) {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#F8FAF7',
        borderRadius: '20px 20px 0px 0px',
        width: '100%',
        flex: '1 1 100%',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginTop: mgTop,
        minHeight,
        justifyContent,
      }}
    >
      {children}
    </div>
  );
}

BackgroundContainer.propTypes = {
  minHeight: PropTypes.string,
  justifyContent: PropTypes.string,
  children: PropTypes.object.isRequired,
  mgTop: PropTypes.string,
};

BackgroundContainer.defaultProps = {
  mgTop: '0px',
  minHeight: '0px',
  justifyContent: 'center',
};
export default BackgroundContainer;
