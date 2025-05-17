import React from "react";

const Hero = () => (
  <>
    <video id="background-video" autoPlay muted loop playsInline>
      <source src="/scuba.mp4" type="video/mp4" />
      Your browser does not support the video feature.
      <p>To view this video, please enable JavaScript and consider upgrading your browser.</p>
    </video>
    <header className="hero">
      <h1>Welcome to Scuba Diving Adventures</h1>
      <p>Explore the underwater world with us!</p>
      <button id="book-now">Book Now</button>
    </header>
  </>
);

export default Hero;
