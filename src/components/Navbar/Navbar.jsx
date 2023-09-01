import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <div className="logo" />
      </Link>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          PassGen
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
