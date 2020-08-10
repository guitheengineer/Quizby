import { useSelector } from 'react-redux';
import { selectMenuIsActive } from '../slices/generalSlice';

export default () => {
  const menuIsActive = useSelector(selectMenuIsActive);
  return menuIsActive;
};
