import React from 'react';
import PropTypes from 'prop-types';

function BackgroundContainer({
  mgTop, minHeight, children, justifyContent,
}) {
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
        justifyContent: justifyContent || 'center',
      }}
    >
      {children}
    </div>
  );
}

BackgroundContainer.propTypes = {
  mgTop: PropTypes.string.isRequired,
  minHeight: PropTypes.string.isRequired,
  justifyContent: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default BackgroundContainer;
