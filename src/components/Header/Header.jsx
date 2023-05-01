import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <span>VentureTours</span>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Bookings
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Packages
          </a>
        </li>
      </ul>
    </nav>
  );
}
