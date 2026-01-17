import React from "react";
import "./Booktrip.css";


function Booktrip() {
    return (
        <section className="easy-steps">
      {/* LEFT */}
      <div className="steps-left">
        <span className="steps-subtitle">Easy and Fast</span>
        <h2 className="steps-title">
          Book Your Next Trip <br /> In 3 Easy Steps
        </h2>

        <div className="step">
          <div className="step-icon yellow">
            <img src="/icons/des.png" alt="" />
          </div>
          <div>
            <h4>Choose Destination</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon red">
            <img src="\icons\pay.png" alt="" />
          </div>
          <div>
            <h4>Make Payment</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon blue">
            <img src="\icons\air.png" alt="" />
          </div>
          <div>
            <h4>Reach Airport on Selected Date</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="steps-right">
        <div className="trip-card">
          <img src="\icons\greece.webp" alt="Trip to Greece" />

          <div className="trip-content">
            <h4>Trip To Greece</h4>
            <p className="trip-date">14-29 June | by Robbin J</p>

            <div className="trip-icons">
              <span>🗺</span>
              <span>🏨</span>
              <span>✈</span>
            </div>

            <div className="trip-footer">
              <p>👥 24 people going</p>
              <span>💙</span>
            </div>
          </div>
        </div>

        {/* Floating Card */}
        <div className="ongoing-card">
          <p className="ongoing">Ongoing</p>
          <h5>Trip to Rome</h5>
          <p className="progress-text">40% completed</p>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Booktrip;