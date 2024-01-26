import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Assuming you are using react-icons library
import "./navbar.css";

const Navbar = () => {
  const navRef = useRef(null); // Initialize useRef with null
  const [isResponsive, setIsResponsive] = useState(false);

  const showNavbar = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className="navbar">
      <div className="logo">Store</div>
      <div className={`navbar-components ${isResponsive ? "responsive_nav" : ""}`} ref={navRef}>
        <button>Home</button>
        <button>Recently added</button>
        <button>Favourites</button>
        <button>Logged in</button>
        <button onClick={showNavbar}>
          {isResponsive ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <button onClick={showNavbar}>
        {isResponsive ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Navbar;
