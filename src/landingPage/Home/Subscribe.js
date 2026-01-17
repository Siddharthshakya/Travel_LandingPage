import React from "react";
import "./Subscribe.css"

function Subscribe() {
    return (
         <section className="subscribe-section">
      <h2 className="subscribe-title">
        Subscribe to get information, latest news and other
        interesting offers about Jadoo
      </h2>

      <div className="subscribe-form">
        <div className="input-wrapper">
          <span className="mail-icon">✉</span>
          <input
            type="email"
            placeholder="Your email"
          />
        </div>

        <button className="subscribe-btn">Subscribe</button>
      </div>
    </section>
    )
}

export default Subscribe;