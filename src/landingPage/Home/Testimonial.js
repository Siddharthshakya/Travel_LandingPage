import React from "react";
import "./Testimonial.css"

function Testimonial() {
    return (
        <section className="testimonials">
      {/* LEFT */}
      <div className="test-left">
        <span className="test-subtitle">TESTIMONIALS</span>
        <h2 className="test-title">
          What People Say <br /> About Us.
        </h2>

        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="test-right">
        <div className="test-card">
          <img src="\icons\test.webp" alt="User" className="avatar" />

          <p className="test-text">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>

          <h4 className="test-name">Mike Taylor</h4>
          <span className="test-location">Lahore, Pakistan</span>
        </div>

        <div className="test-secondary">
          <h4>Chris Thomas</h4>
          <span>CEO of Red Button</span>
        </div>
      </div>
    </section>
    )
}

export default Testimonial;