import React, { Children, cloneElement, CSSProperties } from 'react';
import Menu from '../header/menu';
import { selectGeneralReducer } from '../../../slices/general-slice/general-slice';
import { useAppSelector } from '../../../store/store';

type Props = CSSProperties & {
  children: React.ReactElement;
};

const BackgroundContainer = ({
  children,
  marginTop = 'auto',
  top = '0px',
  alignItems = 'normal',
  justifyContent = 'center',
  height = '6rem',
  minHeight,
  overflow = 'hidden',
}: Props) => {
  const { menuIsActive } = useAppSelector(selectGeneralReducer);

  const commonStyles: CSSProperties = {
    marginTop,
    top,
    alignItems,
    justifyContent,
    height,
  };

  const inactiveMenu: CSSProperties = {
    ...commonStyles,
    overflowY: 'hidden',
  };
  const activeMenu: CSSProperties = {
    ...commonStyles,
    overflow,
    minHeight,
    flex: '1 1 100%',
  };

  return (
    <>
      {menuIsActive && <Menu />}
      <div
        className="Background-container"
        style={menuIsActive ? inactiveMenu : activeMenu}
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
};

export default BackgroundContainer;
