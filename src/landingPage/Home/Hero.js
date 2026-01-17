import React from "react";
import "./Hero.css";


function Hero() {
    return (
        <>
            <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            BEST DESTINATIONS AROUND THE WORLD
          </span>

          <h1 className="hero-title">
            Travel, enjoy <br />
            and live a new <br />
            and full life
          </h1>

          <p className="hero-description">
            Built wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening.
            Park gate sell they west hard for the.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Find out more</button>

            <button className="btn-secondary">
              <span className="play-icon">▶</span>
              Play Demo
            </button>
          </div>
        </div>

        <div className="hero-image relative flex justify-center items-center">

           {/* DESIGNER BACKGROUND BLOB */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[120%] h-[80%] bg-[#FFF1DA] rounded-full 
                     filter blur-[80px] opacity-70 -z-10"
        ></div>


          <img src="/icons/heros.png" alt="Travel Hero" className="relative z-10 w-full max-w-lg object-contain"/>
        </div>
      </section>
        </>
    )
}

export default Hero;