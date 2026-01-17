import React from "react";
import "./icn.css"

function Icn() {
    const logos = [
    { src: "/icons/axon.jpeg", alt: "Axon" },
    { src: "/icons/jetstar.jpeg", alt: "Jetstar" },
    { src: "/icons/expedia.jpeg", alt: "Expedia" },
    { src: "/icons/Qantas.jpeg", alt: "Qantas" },
    { src: "/icons/litalia.jpeg", alt: "Alitalia" },
  ];


    return (
        <section className="partners-section">
      <div className="partners-container">
        {logos.map((logo, index) => (
          <div className="partner-card" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
    );
}

export default Icn;