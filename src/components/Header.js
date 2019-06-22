import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <NavLink to="/" exact className="nav__title">
        Should You <span className="nav__title__span">Do It</span>
      </NavLink>
      <ul className="nav__ul">
        <li className="nav__ul__li">
          <NavLink to="/" exact className="navLink" activeClassName="isActive">
            Home
          </NavLink>
        </li>
        <li className="nav__ul__li">
          <NavLink to="/gallery" className="navLink" activeClassName="isActive">
            Gallery
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
