import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <Link to="/" className="header__nav__title">
        Should You <span className="header__nav__title__span">Do It</span>
      </Link>
      <ul className="header__ul">
        <li className="header__ul__li">
          <Link to="/" className="header__ul__li__link">Home</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;