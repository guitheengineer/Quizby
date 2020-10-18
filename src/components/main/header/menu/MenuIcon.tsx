import React from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import {
  changeMenu,
  selectMenuIsActive,
} from 'slices/general-slice/general-slice';

const MenuIcon = () => {
  const dispatch = useAppDispatch();
  const menuIsActive = useAppSelector(selectMenuIsActive);

  return (
    <button
      type="button"
      className="Header__menu-icon"
      onClick={() => dispatch(changeMenu())}
    >
      {[...Array(3)].map((e, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className={menuIsActive ? 'clicked' : undefined} />
      ))}
    </button>
  );
};

export default MenuIcon;
