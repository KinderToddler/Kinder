import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props =>(
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "active"
              : ""
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={window.location.pathname === "/match" ? "active" : ""}>
          <Link to="/match">Match</Link>
        </li>
        <li className={window.location.pathname === "/search" ? "active" : ""}>
          <Link to="/search">Search</Link>
        </li>
        <li className={window.location.pathname === "/logout" ? "active" : "logout"}>
          <Link to="/">LogOut</Link>
        </li>
      </ul>
    </div>
  </nav>
);  
export default Nav;