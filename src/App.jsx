import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tours from './components/Tours';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      {/* Video de fondo global */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/scuba.mp4"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.35,
          pointerEvents: "none"
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Tours />
        <Gallery />
        <Contact />
        <Carousel />
        <Footer />
      </div>
    </>
  );
}

export default App;
