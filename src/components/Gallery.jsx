import React, { useState } from "react";

const images = [
  "/Buceo 1.jpg",
  "/Buceo 2.jpg",
  "/Buceo 3.jpg",
  "/Buceo 4.jpg",
  "/Buceo 5.jpg",
  "/Buceo 6.jpg",
  "/Buceo 7.jpg",

  "/scuba.mp4" // Si quieres mostrar el video como imagen, puedes usar una miniatura
];

const imageFiles = images.filter((img) => !img.endsWith('.mp4'));

const Gallery = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  // Abre el carrusel con el índice del array de solo imágenes
  const openCarousel = (idx) => {
    // Buscar el índice real en el array original
    const realIdx = images.findIndex(img => img === imageFiles[idx]);
    setCurrent(realIdx);
    setCarouselOpen(true);
  };
  const closeCarousel = () => setCarouselOpen(false);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section id="gallery" className="view" style={{ position: "relative", overflow: "hidden" }}>
      {/* Quitado el video de fondo, ahora está en App.jsx */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2>Gallery</h2>
        <div className="gallery">
          {imageFiles.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={`Gallery ${idx + 1}`}
              onClick={() => openCarousel(idx)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
        {carouselOpen && (
          <div className="carousel" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="carousel-content" style={{ position: "relative", background: "rgba(0,0,0,0.9)", borderRadius: 12, padding: 24, boxShadow: "0 4px 16px #000", minWidth: 420, minHeight: 320, maxWidth: 600, maxHeight: 500, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <button className="prev" onClick={prev} style={{ position: "absolute", left: -50, top: "50%", transform: "translateY(-50%)", zIndex: 2 }}>&#10094;</button>
              <div className="main-image" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                {images[current] && images[current].endsWith('.mp4') ? (
                  <video src={images[current]} controls style={{ maxWidth: 350, maxHeight: 350, borderRadius: 10, boxShadow: "0 2px 8px #000" }} />
                ) : images[current] ? (
                  <img src={images[current]} alt="" style={{ maxWidth: 350, maxHeight: 350, borderRadius: 10, boxShadow: "0 2px 8px #000" }} />
                ) : null}
              </div>
              <button className="next" onClick={next} style={{ position: "absolute", right: -50, top: "50%", transform: "translateY(-50%)", zIndex: 2 }}>&#10095;</button>
              <button className="close" onClick={closeCarousel} style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.7)", border: "none", color: "#fff", fontSize: 28, borderRadius: "50%", width: 36, height: 36, cursor: "pointer", zIndex: 3 }}>&times;</button>
            </div>
            <div className="thumbnail-container" style={{ marginTop: 16 }}>
              <div className="thumbnails">
                {imageFiles.map((img, idx) => {
                  // Buscar el índice real en el array original
                  const realIdx = images.findIndex(im => im === img);
                  return (
                    <img
                      key={img}
                      src={img}
                      alt={`Thumb ${idx + 1}`}
                      className={realIdx === current ? "active" : ""}
                      onClick={() => setCurrent(realIdx)}
                      style={{ cursor: "pointer" }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
