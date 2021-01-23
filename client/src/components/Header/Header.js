import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TextField from "@material-ui/core/TextField";
import Logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <Link to="movies">Movies</Link>
          <Link to="series">Series</Link>
          <Link to="aboutUs">AboutUs</Link>
        </div>
        <div className="header__rigth">
          <TextField
            className="header__rigth-input"
            id="outlined-basic"
            label="Search"
            variant="outlined"
          />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
