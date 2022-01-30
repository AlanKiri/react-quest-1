import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import "../pages/styles/Shared.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/main">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/contributors">Contributors</Link>
      </div>
    </div>
  );
};

export default Navbar;
