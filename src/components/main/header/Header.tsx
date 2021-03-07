import { CSSProperties } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import MenuIcon from './menu/MenuIcon';
import LandingIconMenu from 'pages/landing/components/LandingIconMenu';

type Props = {
  showlogo: boolean;
  style: CSSProperties;
  showmenu?: boolean | 'landing';
  headerClassName?: string;
};

const Header = ({
  showlogo = true,
  style,
  showmenu = true,
  headerClassName,
}: Props) => (
  <div style={style} className={`Header ${headerClassName}`}>
    {showlogo && (
      <Link style={{ textDecoration: 'none' }} to="/">
        <span className="Header__title">Quizby</span>
      </Link>
    )}
    {showmenu === 'landing' ? (
      <LandingIconMenu />
    ) : showmenu ? (
      <MenuIcon />
    ) : null}
  </div>
);
export default Header;
