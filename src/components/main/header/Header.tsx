import React, { CSSProperties } from 'react';
import './header.scss';

import { Link } from 'react-router-dom';
import MenuIcon from './menu/MenuIcon';

type Props = { showlogo: boolean; style: CSSProperties; showmenu?: boolean };

const Header = ({ showlogo = true, style, showmenu = true }: Props) =>
  showlogo ? (
    <div style={style} className="Header">
      <Link style={{ textDecoration: 'none' }} to="/">
        <span className="Header__title">Quizby</span>
      </Link>
      {showmenu ? <MenuIcon /> : null}
    </div>
  ) : null;

export default Header;
