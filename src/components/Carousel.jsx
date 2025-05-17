import React from "react";

const Carousel = () => (
  <div id="carousel" className="carousel" style={{ display: "none" }}>
    <div className="carousel-content">
      <button className="close">&times;</button>
      <button className="prev">&#10094;</button>
      <div className="main-image">
        <img id="carousel-img" src="" alt="" />
      </div>
      <button className="next">&#10095;</button>
    </div>
    <div className="thumbnail-container">
      <div id="thumbnails" className="thumbnails">
        {/* Thumbnails will be dynamically added here */}
      </div>
    </div>
  </div>
);

export default Carousel;
