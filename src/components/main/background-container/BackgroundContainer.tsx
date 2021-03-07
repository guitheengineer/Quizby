import { Children, cloneElement, CSSProperties, useEffect } from 'react';
import './background-container.scss';
import Menu from '../header/menu';
import {
  changeMenu,
  selectGeneralReducer,
} from 'slices/general-slice/general-slice';
import { useAppSelector } from 'store';
import { ThunkResponses } from 'types';
import { useDispatch } from 'react-redux';
import FetchError from 'components/common/fetch-error/FetchError';

type Props = CSSProperties & {
  isLoading?: ThunkResponses | ThunkResponses[];
  children: React.ReactElement;
  className?: string;
  fetch?: any;
};

const BackgroundContainer = ({
  children,
  marginTop,
  top = '0px',
  alignItems = 'normal',
  justifyContent = 'center',
  overflow = 'hidden',
  paddingBottom,
  isLoading = 'fulfilled',
  minHeight,
  className,
  boxShadow,
  borderRadius,
}: Props) => {
  const { menuIsActive } = useAppSelector(selectGeneralReducer);
  const dispatch = useDispatch();
  const commonStyles: CSSProperties = {
    marginTop,
    top,
    alignItems,
    boxShadow,
    justifyContent,
    height: menuIsActive ? 60 : undefined,
    paddingBottom,
    borderRadius,
  };
  useEffect(() => {
    dispatch(changeMenu({ type: 'menuIsActive', isActive: false }));
  }, [dispatch]);

  const inactiveMenu: CSSProperties = {
    ...commonStyles,
    overflow,
    flex: '1 1 100%',
    minHeight,
  };

  const activeMenu: CSSProperties = {
    ...commonStyles,
    borderRadius: '20px 20px 0 0',
    overflowY: 'hidden',
  };

  return (Array.isArray(isLoading) &&
    isLoading.some((el) => el === 'fulfilled' || el === 'pending')) ||
    isLoading === 'fulfilled' ||
    isLoading === 'pending' ? (
    <>
      {menuIsActive && <Menu />}
      <div
        className={`Background-container ${
          menuIsActive ? 'Background-container--menuActive' : null
        } ${className} `}
        style={menuIsActive ? activeMenu : inactiveMenu}
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
  ) : (Array.isArray(isLoading) && isLoading.some((el) => el === 'rejected')) ||
    isLoading === 'rejected' ? (
    <>
      {menuIsActive && <Menu />}
      <div
        className={`Background-container ${
          menuIsActive ? 'Background-container--menuActive' : null
        } ${className} `}
        style={
          menuIsActive
            ? { ...activeMenu, paddingBottom: 0 }
            : { ...inactiveMenu, paddingBottom: 0 }
        }
      >
        <FetchError type="common" />
      </div>
    </>
  ) : null;
};

export default BackgroundContainer;
