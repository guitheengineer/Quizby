import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMenu } from '../../../slices/general-slice';
import { setMenuIsActive } from '../../../customhooks';

const MenuIcon = () => {
  const dispatch = useDispatch();
  const menuIsActive = setMenuIsActive();

  return (
    <button
      type="button"
      className="App--menuicon"
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
