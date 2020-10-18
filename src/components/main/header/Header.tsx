import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from './menu/MenuIcon';

type Props = { showlogo: boolean; style: CSSProperties };

const Header = ({ showlogo = true, style }: Props) =>
  showlogo ? (
    <div style={style} className="Header">
      <Link style={{ textDecoration: 'none' }} to="/">
        <span className="Header__title">Quizby</span>
      </Link>
      <MenuIcon />
    </div>
  ) : (
    <div style={{ marginTop: '4rem' }} />
  );

export default Header;
