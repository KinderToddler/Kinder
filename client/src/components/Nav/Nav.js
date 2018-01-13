import React from "react";
import { Link } from "react-router-dom";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Kinder
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          <Link to="/">About</Link>
        </li>
        <li
          className={window.location.pathname === "/discover" ? "active" : ""}
        >
          <Link to="/discover">Discover</Link>
        </li>
        <li className={window.location.pathname === "/search" ? "active" : ""}>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </div>
  </nav>;
  
export default Nav;