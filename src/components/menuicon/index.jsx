import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMenu } from '../../slices/generalSlice';

function MenuIcon() {
  const dispatch = useDispatch();
  const menuIsActive = useSelector((data) => data.generalReducer.menuIsActive);
  console.log(menuIsActive);
  return (
    <button
      type="button"
      className="App--menuicon"
      onClick={() => dispatch(changeMenu())}
    >
      <div className={menuIsActive && 'clicked'} />
      <div className={menuIsActive && 'clicked'} />
      <div className={menuIsActive && 'clicked'} />
    </button>
  );
}

export default MenuIcon;
