import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-3">
        {/* Logo*/ }
        <Link className="navbar-brand" to="/">
          <h1 className="mb-0 fw-bold" style={{ fontSize: "1.8rem" }}>
            <span style={{ color: "#181E4B" }}>Jad</span>
            <span style={{ color: "#DF6951" }}>oo</span>
          </h1>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <Link 
                className="nav-link fw-medium" 
                style={{color: "#212832"}}
                to="/destinations"
              >
                Destinations
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link fw-medium" 
                style={{color: "#212832"}}
                to="/hotels"
              >
                Hotels
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link fw-medium" 
                style={{color: "#212832"}}
                to="/flights"
              >
                Flights
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link fw-medium" 
                style={{color: "#212832"}}
                to="/bookings"
              >
                Bookings
              </Link>
            </li>
          </ul>

          {/* Auth Buttons & Language Selector */}
          <div className="d-flex align-items-center gap-3">
            <Link 
              to="/login" 
              className="btn fw-medium"
              style={{color: "#212832"}}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="btn fw-medium px-4 py-2"
              style={{
                border: "2px solid #212832",
                color: "#212832",
                borderRadius: "5px",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#212832";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#212832";
              }}
            >
              Sign up
            </Link>
            <select 
              className="form-select fw-medium" 
              style={{
                width: "auto",
                border: "none",
                color: "#212832",
                backgroundColor: "transparent"
              }}
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
            </select>
          </div>
        </div>

      </div>

       {/* Custom CSS for hover effects */}
      <style jsx>{`
        .nav-link:hover {
          color: #DF6951 !important;
        }
        .navbar-toggler:focus {
          box-shadow: none;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
