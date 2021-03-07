import './menu-icon.scss';
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
      className="menu-icon"
      onClick={() => dispatch(changeMenu({ type: 'menuIsActive' }))}
    >
      {[...Array(3)].map((e, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div
          key={i}
          className={`menu-icon__bar ${
            menuIsActive ? 'menu-icon__bar--clicked' : null
          }`}
        />
      ))}
    </button>
  );
};

export default MenuIcon;
