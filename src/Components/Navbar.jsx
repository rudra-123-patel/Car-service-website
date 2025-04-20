import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <p className="logo">
          <span>Speedy</span>CarFix
        </p>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Service</Link>
            </li>
            <li>
              <Link to="/about">Who We</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Navbar;
