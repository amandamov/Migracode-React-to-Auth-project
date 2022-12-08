import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Login</Link>
        </li>
        <li>
          <Link to="/contact">Sign-up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;