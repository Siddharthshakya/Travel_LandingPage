import React from "react";
import "./category.css"

function Category() {
    return (
        <>
            <section className="category-section">
        <p className="category-tag">CATEGORY</p>
        <h2 className="category-title">We offer Best Services</h2>

        <div className="category-container">
          <div className="category-card">
            <img src="/icons/weather.jpeg" alt="Weather" />
            <h4>Calculated Weather</h4>
            <p>
              Built wicket longer admire do barton vanity itself do in it.
            </p>
          </div>

          <div className="category-card">
            <img src="/icons/flight.jpeg" alt="Flights" />
            <h4>Best Flights</h4>
            <p>
              Engrossed listening. Park gate sell they west hard for the.
            </p>
          </div>

          <div className="category-card">
            <img src="/icons/event.jpeg" alt="Events" />
            <h4>Local Events</h4>
            <p>
              Barton vanity itself do in it. Prefered to men it engrossed listening.
            </p>
          </div>

          <div className="category-card">
            <img src="/icons/customization.jpeg" alt="Customization" />
            <h4>Customization</h4>
            <p>
              We deliver outsourced aviation services for military customers.
            </p>
          </div>
        </div>
      </section>
        </>
    )
}

export default Category;