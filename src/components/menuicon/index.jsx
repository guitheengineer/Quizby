import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMenu } from '../../slices/generalSlice';
import { getMenuIsActive } from '../../customhooks';

function MenuIcon() {
  const dispatch = useDispatch();
  const menuIsActive = getMenuIsActive();

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
}

export default MenuIcon;
