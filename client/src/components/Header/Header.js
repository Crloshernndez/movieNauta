import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <ul>
          <li>
            <Link to="/">
              <img src="" alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="movies">Movies</Link>
          </li>
          <li>
            <Link to="series">Series</Link>
          </li>
          <li>
            <Link to="aboutUs">AboutUs</Link>
          </li>
        </ul>
      </div>
      <div className="header__rigth">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Header;
