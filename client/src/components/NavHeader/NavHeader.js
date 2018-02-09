import React from "react";
import { Link } from "react-router-dom";
import "./NavHeader.css";
import { Nav, Navbar, NavItem } from "react-bootstrap";
{
  /* <nav className="navbar">
  <div>
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
      <li className={window.location.pathname === "/home" ? "active" : ""}>
        <Link to="/home">Home</Link>
      </li>
      <li className={window.location.pathname === "home/edit" ? "active" : ""}>
        <Link to="/home/edit">Edit Profile</Link>
      </li>
      <li className={window.location.pathname === "/match" ? "active" : ""}>
        <Link to="/match">Find Match</Link>
      </li>
      <li className={window.location.pathname === "/past" ? "active" : ""}>
        <Link to="/past">Matches</Link>
      </li>
      <li
        className={window.location.pathname === "/logout" ? "active" : "logout"}
      >
        <Link to="/logout">LogOut</Link>
      </li>
    </ul>
  </div>
</nav>; */
}

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const NavHeader = props => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a className="brand">Kinder</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">
          <li className={window.location.pathname === "/home" ? "active" : ""}>
            <Link to="/home">Home</Link>
          </li>
        </NavItem>
        <NavItem eventKey={1} href="#">
          <li
            className={window.location.pathname === "home/edit" ? "active" : ""}
          >
            <Link to="/home/edit">Edit Profile</Link>
          </li>
        </NavItem>
        <NavItem eventKey={2} href="#">
          <li className={window.location.pathname === "/match" ? "active" : ""}>
            <Link to="/match">Find Match</Link>
          </li>
        </NavItem>
        <NavItem eventKey={3} href="#">
          <li className={window.location.pathname === "/past" ? "active" : ""}>
            <Link to="/past">Matches</Link>
          </li>
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={4} href="#">
          <li
            className={
              window.location.pathname === "/logout" ? "active" : "logout"
            }
          >
            <Link to="/logout">LogOut</Link>
          </li>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavHeader;
