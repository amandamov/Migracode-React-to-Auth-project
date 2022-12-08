import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return(
      <nav>
        <ul className="navbar">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/login">Login</Link>
          </li>
          <li className="item">
            <Link to="/sign-up">Sign-up</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;