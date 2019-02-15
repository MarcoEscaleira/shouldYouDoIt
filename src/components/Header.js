import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <Link to="/" className="nav__title">
        Should You <span className="nav__title__span">Do It</span>
      </Link>
      <ul className="nav__ul">
        <li className="nav__ul__li">
          <Link to="/" className="nav__ul__li__link">Home</Link>
        </li><li className="nav__ul__li">
          <Link to="/gallery" className="nav__ul__li__link">Gallery</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;