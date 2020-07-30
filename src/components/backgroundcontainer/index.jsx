import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Menu from '../menu';

function BackgroundContainer({ mgTop, minHeight, children, justifyContent }) {
  const { menuIsActive } = useSelector((data) => data.generalReducer);
  console.log(menuIsActive, ' < menu');
  return (
    <>
      {menuIsActive && <Menu />}
      <div
        style={
          menuIsActive
            ? {
                position: 'relative',
                backgroundColor: '#F8FAF7',
                borderRadius: '20px 20px 0px 0px',
                width: '100%',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                marginTop: 'auto',
                height: '4rem',
                justifyContent,
                transition: 'all 2s',
                overflowY: 'hidden',
              }
            : {
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
              }
        }
      >
        {/* {!menuIsActive && children} */}
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
  children: PropTypes.object.isRequired,
  mgTop: PropTypes.string,
};

BackgroundContainer.defaultProps = {
  mgTop: '0px',
  minHeight: '0px',
  justifyContent: 'center',
};
export default BackgroundContainer;
