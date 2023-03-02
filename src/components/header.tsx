import './App.css';
import React from 'react';
const Navbar = () => {
  return (
    <nav id="navbar_top" className="navbar navbar-expand-lg">
      <div className="container">
        {/*     <a className="navbar-brand" href="#"><img src="images/logo.png" /></a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Meet The Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li className="nav-item donate_btn">
              <a className="nav-link" href="#"><i className="fa fa-heart" aria-hidden="true"></i> Donate Now</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
