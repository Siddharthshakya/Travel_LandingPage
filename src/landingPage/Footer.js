import React from "react";
import { Link } from "react-router-dom"

function Footer() {
    return(
        <footer className="py-5" style={{ backgroundColor: "#F7F8FC" }}>
      <div className="container">
        <div className="row g-4">
          {/* Brand Column */}
          <div className="col-lg-3 col-md-6">
            <h2 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
              <span style={{ color: "#181E4B" }}>Jad</span>
              <span style={{ color: "#DF6951" }}>oo</span>
              <span style={{ color: "#181E4B" }}>.</span>
            </h2>
            <p style={{ color: "#5E6282", fontSize: "0.95rem" }}>
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4" style={{ color: "#181E4B" }}>
              Company
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-decoration-none"
                  style={{ color: "#5E6282", fontSize: "0.95rem" }}
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/careers"
                  className="text-decoration-none"
                  style={{ color: "#5E6282", fontSize: "0.95rem" }}
                >
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/mobile"
                  className="text-decoration-none"
                  style={{ color: "#5E6282", fontSize: "0.95rem" }}
                >
                  Mobile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4" style={{ color: "#181E4B" }}>
              Contact
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/help"
                  className="text-decoration-none"
                  style={{ color: "#5E6282", fontSize: "0.95rem" }}
                >
                  Help/FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/press"
                  className="text-decoration-none"
                  style={{ color: "#5E6282", fontSize: "0.95rem" }}
                >
                  Press
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/affiliates"
                  className="text-decoration-none"
                  style={{ color: "#5E6282", fontSize: "0.95rem" }}
                >
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>

          {/* More Column */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4" style={{ color: "#181E4B" }}>
              More
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/airlinefees"
                  className="text-decoration-none"
                  style={{ color: "#5E6282", fontSize: "0.95rem" }}
                >
                  Airlinefees
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/airline"
                  className="text-decoration-none"
                  style={{ color: "#5E6282", fontSize: "0.95rem" }}
                >
                  Airline
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/low-fare-tips"
                  className="text-decoration-none"
                  style={{ color: "#5E6282", fontSize: "0.95rem" }}
                >
                  Low fare tips
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social & App Column */}
<div className="col-lg-3 col-md-12">
  <div className="d-flex justify-content-lg-end justify-content-start gap-3 mb-4">

    {/* Facebook */}
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none"
    >
      <div
        className="d-flex align-items-center justify-content-center rounded-circle"
        style={{
          width: "45px",
          height: "45px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          transition: "all 0.3s",
        }}
      >
        <img
      src="icons\fb.jpeg"
      alt="Facebook"
      style={{ width: "20px", height: "20px" }}
    />
      </div>
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none"
    >
      <div
        className="d-flex align-items-center justify-content-center rounded-circle"
        style={{
          width: "45px",
          height: "45px",
          background:
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          transition: "all 0.3s",
        }}
      >
        <img
      src="\icons\is.jpeg"
      alt="Instagram"
      style={{ width: "20px", height: "20px" }}
    />
      </div>
    </a>

    {/* Twitter */}
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none"
    >
      <div
        className="d-flex align-items-center justify-content-center rounded-circle"
        style={{
          width: "45px",
          height: "45px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          transition: "all 0.3s",
        }}
      >
          <img
      src="\icons\x.jpeg"
      alt="Instagram"
      style={{ width: "20px", height: "20px" }}
    />
      </div>
    </a>
  </div>

  {/* App Links */}
  <div>
    <h6 className="fw-bold mb-3" style={{ color: "#5E6282" }}>
      Discover our app
    </h6>

    <div className="d-flex gap-2 flex-wrap">
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Get it on Google Play"
          style={{ height: "45px" }}
        />
      </a>

      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
          alt="Download on the App Store"
          style={{ height: "45px" }}
        />
      </a>
    </div>
  </div>
</div>

{/* Copyright */}
<div className="row mt-5 pt-4 border-top">
  <div className="col text-center">
    <p style={{ color: "#5E6282", fontSize: "0.9rem", margin: 0 }}>
            All rights reserved © jadoo.co
          </p>

        </div>
     </div>

    </div>
    </div>
     </footer>
    );
}

export default Footer;