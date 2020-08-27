import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Menu from '../menu';
import { selectGeneralReducer } from '../../slices/generalSlice';

const BackgroundContainer = ({
  mgTop,
  minHeight,
  children,
  justifyContent,
  overflow,
  alignItems,
  top,
  height,
}) => {
  const { menuIsActive } = useSelector(selectGeneralReducer);

  const commonStyles = {
    position: 'relative',
    backgroundColor: '#F8FAF7',
    borderRadius: '20px 20px 0px 0px',
    width: '100',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 2s',
    marginTop: mgTop,
    top,
    alignItems,
    justifyContent,
    height,
  };
  return (
    <>
      {menuIsActive && <Menu />}
      <div
        style={
          menuIsActive
            ? {
                ...commonStyles,
                overflowY: 'hidden',
              }
            : {
                ...commonStyles,
                overflow,
                flex: '1 1 100%',
                minHeight,
              }
        }
      >
        {Children.map(children, (child) =>
          cloneElement(child, {
            className: `${child.props ? child.props.className : ''} ${
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
  top: PropTypes.string,
  overflow: PropTypes.string,
  alignItems: PropTypes.string,
  height: PropTypes.string,
};

BackgroundContainer.defaultProps = {
  minHeight: '0px',
  justifyContent: 'center',
  overflow: 'hidden',
  alignItems: 'normal',
  top: '0px',
  mgTop: 'auto',
  height: '4rem',
};

export default BackgroundContainer;
