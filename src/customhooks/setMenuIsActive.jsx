import { useSelector } from 'react-redux';
import { selectMenuIsActive } from '../slices/general-slice';

export default () => {
  const menuIsActive = useSelector(selectMenuIsActive);
  return menuIsActive;
};
