// banner.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Banner() {
  return (
    <header className="banner">
      <Link to="/" className="logo-link">
        <img className="logo" src={logo} alt="logo kasa" />
      </Link>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Banner;
