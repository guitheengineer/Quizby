import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Menu from '../menu';

function BackgroundContainer({
  mgTop,
  minHeight,
  children,
  justifyContent,
  overflow,
  alignItems,
}) {
  const { menuIsActive } = useSelector((data) => data.generalReducer);

  const commonStyles = {
    position: 'relative',
    backgroundColor: '#F8FAF7',
    borderRadius: '20px 20px 0px 0px',
    width: '100',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 2s',
    alignItems,
    justifyContent,
  };
  return (
    <>
      {menuIsActive && <Menu />}
      <div
        style={
          menuIsActive
            ? {
                ...commonStyles,
                overflow: 'hidden',
                marginTop: 'auto',
                height: '4rem',
              }
            : {
                ...commonStyles,
                overflow,
                flex: '1 1 100%',
                marginTop: mgTop,
                minHeight,
              }
        }
      >
        {Children.map(children, (child) =>
          cloneElement(child, {
            className: `${child.props.className} ${
              menuIsActive && 'childrenAnimation'
            }`,
          })
        )}
      </div>
    </>
  );
}

BackgroundContainer.propTypes = {
  minHeight: PropTypes.string,
  justifyContent: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  mgTop: PropTypes.string,
  overflow: PropTypes.string,
  alignItems: PropTypes.string,
};

BackgroundContainer.defaultProps = {
  mgTop: '0px',
  minHeight: '0px',
  justifyContent: 'center',
  overflow: 'hidden',
  alignItems: 'normal',
};
export default BackgroundContainer;
