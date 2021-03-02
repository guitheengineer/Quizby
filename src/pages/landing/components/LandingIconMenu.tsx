import React from 'react';
import { changeMenu, selectGeneralReducer } from 'slices/general-slice';
import { useAppDispatch, useAppSelector } from 'store';

const LandingIconMenu = ({ className = '' }: { className?: string }) => {
  const dispatch = useAppDispatch();
  const { isLandingMenuActive } = useAppSelector(selectGeneralReducer);

  return (
    <button
      onClick={() => dispatch(changeMenu({ type: 'isLandingMenuActive' }))}
      type="button"
      className={`menu-icon menu-icon--landing ${className}`}
    >
      {[...Array(3)].map((e, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div
          key={i}
          className={`menu-icon__bar ${
            isLandingMenuActive ? 'menu-icon__bar--clicked' : null
          }`}
        />
      ))}
    </button>
  );
};

export default LandingIconMenu;
