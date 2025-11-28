import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";


function Navbar() {
  return (
    <>
      
        <div className="maincontainer">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="navbar">
            <ul className="icon">
              <li className="nav">
                <NavLink to="/" className="abc">
                  Home
                </NavLink>
              </li>
              <li className="nav">
                <NavLink to="/shop" className="abc">
                  Our Shop
                </NavLink>
              </li>
              <li className="nav">
                <NavLink to="/product" className="abc">
                  Product Details
                </NavLink>
              </li>
              <li className="nav">
                <NavLink to="/contact" className="abc">
                  Contact Us
                </NavLink>
              </li>
              <li className="sign">
                <NavLink to="/sign" className="abc">
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        
    </>
  );
}

export default Navbar;
