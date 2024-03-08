import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
        <div class="logo">
          <a href="index.html">Blood Donor</a>
        </div>
        <ul class="nav-links">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li class="dropdown">
            <a href="blood.html">Blood</a>
            <div class="sub">
              <ul>
                <li>
                  <a href="bloodType.html">Blood types</a>
                </li>
                <li>
                  <a href="#">Blood Bloges</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Request</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="form.html">Login</a>
          </li>
          <li>
            <a href="sign.html">Sign Up</a>
          </li>
        </ul>
    </div>
  );
}
export default Navbar;
