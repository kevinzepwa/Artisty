import React, { useState } from "react";
import "../navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  // hamburger active state
  const [active, setActive] = useState("nav_menu");

  // toggleIcon state ="hamburger"
  const [toggleIcon, setToggleIcon] = useState("hamburger");

  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    // ToggleIcon
    toggleIcon === "hamburger"
      ? setToggleIcon("hamburger toggle")
      : setToggleIcon("hamburger");
  };

  return (
    <nav className="nav">
      <div className="bg-image"></div>
      <Link to="/" className="logo">
        Artisty
      </Link>

      {/* Navbar menu  */}
      <ul className={active}>
        <li className="nav_item">
          <Link to="/gallery" className="nav_link">
            Gallery
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/artists" className="nav_link">
            Artists
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/addart" className="nav_link">
            Addart
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon  */}
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;