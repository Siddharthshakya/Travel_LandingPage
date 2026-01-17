import React from "react";
import "./Destination.css";

function Destination() {
     const destinations = [
    {
      image: "/icons/rome.jpeg",
      place: "Rome, Italy",
      days: "10 Days Trip",
      price: "$5.42k",
    },
    {
      image: "/icons/london.jpeg",
      place: "London, UK",
      days: "12 Days Trip",
      price: "$4.2k",
    },
    {
      image: "/icons/europe.jpg",
      place: "Full Europe",
      days: "28 Days Trip",
      price: "$15k",
    },
  ];

    return (
        <section className="destination">
      <div className="destination-header">
        <span className="destination-subtitle">Top Selling</span>
        <h2 className="destination-title">Top Destinations</h2>
      </div>

      <div className="destination-grid">
        {destinations.map((item, index) => (
          <div className="destination-card" key={index}>
            <img src={item.image} alt={item.place} />

            <div className="destination-content">
              <div className="destination-row">
                <h4>{item.place}</h4>
                <span>{item.price}</span>
              </div>

              <div className="destination-days">
                <span>✈</span>
                <p>{item.days}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
}

export default Destination;