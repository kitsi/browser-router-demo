import "../App.css";

import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
    </ul>
  );
}

export default Navbar;
