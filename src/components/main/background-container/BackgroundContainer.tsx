import React, { Children, cloneElement, CSSProperties, useEffect } from 'react';
import './background-container.scss';
import Menu from '../header/menu';
import {
  changeMenu,
  selectGeneralReducer,
} from '../../../slices/general-slice/general-slice';
import { useAppSelector } from '../../../store/store';
import { ThunkResponses } from '../../../types';
import { useDispatch } from 'react-redux';

type Props = CSSProperties & {
  isLoading?: ThunkResponses;
  children: React.ReactElement;
  className?: string;
  fetch?: any;
};

const BackgroundContainer = ({
  children,
  marginTop = 'auto',
  top = '0px',
  alignItems = 'normal',
  justifyContent = 'center',
  overflow = 'hidden',
  paddingBottom = 0,
  isLoading = 'fulfilled',
  minHeight,
  className,
}: Props) => {
  const { menuIsActive } = useAppSelector(selectGeneralReducer);
  const dispatch = useDispatch();
  const commonStyles: CSSProperties = {
    marginTop,
    top,
    alignItems,
    justifyContent,
    height: menuIsActive ? '6rem' : null,
    paddingBottom,
  };
  useEffect(() => {
    dispatch(changeMenu(false));
  }, []);

  const inactiveMenu: CSSProperties = {
    ...commonStyles,
    overflowY: 'hidden',
  };
  const activeMenu: CSSProperties = {
    ...commonStyles,
    overflow,
    flex: '1 1 100%',
    minHeight,
  };
  return isLoading === 'fulfilled' || isLoading === 'pending' ? (
    <>
      {menuIsActive && <Menu />}
      <div
        className={`Background-container ${className}`}
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
  ) : null;
};

export default BackgroundContainer;
