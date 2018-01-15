import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props =>(
  <nav className="navbar">
    <div className="container-fluid">
      <ul className="nav">
        <li className="brand">Kinder</li>
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/login"
              ? "active"
              : ""
          }
        >
          <Link to="/">Login</Link>
        </li>
        <li
          className={window.location.pathname === "/home" ? "active" : ""}>
          <Link to="/home">Home</Link>
        </li>
        <li
          className={window.location.pathname === "home/edit" ? "active" : ""}>
          <Link to="/home/edit">Edi Profile</Link>
        </li>
        <li
          className={window.location.pathname === "/match" ? "active" : ""}>
          <Link to="/match">Find Match</Link>
        </li>
        <li className={window.location.pathname === "/search" ? "active" : ""}>
          <Link to="/search">Past Matches</Link>
        </li>
        <li className={window.location.pathname === "/logout" ? "active" : "logout"}>
          <Link to="/">LogOut</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;