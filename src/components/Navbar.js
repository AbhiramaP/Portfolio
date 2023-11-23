import React, { useEffect, useState } from "react";
import "../css/Nav.css";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const [locpath, setlocpath] = useState("/");
  useEffect(() => {
    setlocpath(location.pathname);
  }, [location]);
  const hamburger = (value) => {
    setNavbar(value);
  };
  return (
    <>
      <header>
        <div class="navbar">
          <button className="ham" onClick={() => hamburger(true)}>
            &#9776;
          </button>
          <ul className="nav-list">
            {locpath === "/" ? " " : <Link to="/">Home</Link>}
            {locpath === "/about" ? " " : <Link to="/about">About</Link>}
            {locpath === "/skills" ? " " : <Link to="/skills">Skills</Link>}              
            {locpath === "/cerificates" ? " " : <Link to="/certificates">Certificates</Link>}              
            {locpath === "/education" ? " " : <Link to="/education">Education</Link>}
            {locpath === "/contact" ? " " : <Link to="/contact">Contact</Link>}           
            <li className="hamburger">
              <span onClick={() => hamburger(true)}></span>
            </li>
          </ul>
          {navbar ? (
            <>
              <div id="mySidebar" className="sidebar">
                <span className="closebtn" onClick={() => hamburger(false)}>
                  &times;
                </span>
                <ul className="side-list">
                <li>
                    <Link to="/" onClick={() => hamburger(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={() => hamburger(false)}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/skills" onClick={() => hamburger(false)}>
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link to="/certificates" onClick={() => hamburger(false)}>
                      Certificates
                    </Link>
                  </li>
                  <li>
                    <Link to= "/education" onClick={() => hamburger(false)}>
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={() => hamburger(false)}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
}
export default Navbar;
