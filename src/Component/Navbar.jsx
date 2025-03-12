import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Logocommunion.0485ada0760e4748313f.png";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track the active link
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024); // Check if tablet mode

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isSidebarOpen) {
      toggleSidebar();
    }
  };

  return (
    <header className="navbar">
      {/* Left Side: Logo */}
      <div className="navbar__left">
        <img src={logo} alt="Logo" className="navbar__logo" />
      </div>

      {/* Show Burger Menu in Tablet and Mobile */}
      {isTablet && (
        <button className="navbar__burger" onClick={toggleSidebar}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      )}

      {/* Center: Navigation Links (Hidden in Tablet Mode) */}
      {!isTablet && (
        <nav className="navbar__nav">
          <ul>
            {["", "About", "Event"].map((path) => (
              <li key={path}>
                <Link
                  to={`/${path}`}
                  className={activeLink === path ? "active" : ""}
                  onClick={() => handleLinkClick(path)}
                >
                  {path === "" ? "Home" : path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Right Side: Join Button (Hidden in Tablet Mode) */}
      {!isTablet && (
        <div className="navbar__wallet">
          <button>
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Join</span>
           </button>

        </div>
      )}

      {/* Sidebar for Mobile & Tablet */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="sidebar__close" onClick={toggleSidebar}>
          &times;
        </button>
        <nav className="sidebar__nav">
          <ul>
            {["", "About", "Event"].map((path) => (
              <li key={path}>
                <Link
                  to={`/${path}`}
                  className={activeLink === path ? "active" : ""}
                  onClick={() => handleLinkClick(path)}
                >
                  {path === "" ? "Home" : path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
              </li>
            ))}
            {/* Show Join Button inside Sidebar in Tablet Mode */}
            {isTablet && (
              <li>
                <button className="sidebar__join-btn">Join</button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
