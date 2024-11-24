import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // User scrolled up
      } else {
        setIsScrolled(false); // At the top of the page
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar sticky-top navbar-light"
      style={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.7)',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: 'white' , fontWeight: "bold"}}>
          HairExpert&Co
        </a>
        <div className="d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3">
              <NavLink
                className={({ isActive }) => isActive ? 'active-item nav-link' : 'passive-item nav-link'}
                style={{ color: 'white' }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                className={({ isActive }) => isActive ? 'active-item nav-link' : 'passive-item nav-link'}
                style={{ color: 'white' }}
                to="/input"
              >
                Appointment
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                className={({ isActive }) => isActive ? 'active-item nav-link' : 'passive-item nav-link'}
                style={{ color: 'white' }}
                to="/about-us"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
