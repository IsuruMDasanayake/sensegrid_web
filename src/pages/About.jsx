import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/About.css";

const About = () => {
  const slides = [
    "/assets/images/presentation/Slide1.jpg",
    "/assets/images/presentation/Slide2.jpg",
    "/assets/images/presentation/Slide3.jpg",
    "/assets/images/presentation/Slide4.jpg",
    "/assets/images/presentation/Slide5.jpg",
    "/assets/images/presentation/Slide6.jpg",
    "/assets/images/presentation/Slide7.jpg",
    "/assets/images/presentation/Slide8.jpg",
    "/assets/images/presentation/Slide9.jpg",
    "/assets/images/presentation/Slide10.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef(null);

  

  // Swipe support
  useEffect(() => {
    const container = containerRef.current;
    let startX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextSlide();
      if (endX - startX > 50) prevSlide();
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1)
      setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0)
      setCurrentSlide(currentSlide - 1);
  };

  const toggleZoom = () => setIsZoomed(!isZoomed);

  const enterFullScreen = () => {
    const elem = containerRef.current;
    if (elem.requestFullscreen) elem.requestFullscreen();
  };

  return (
    <>
      <Navbar />

      <div className="about-page">
        <div className="presentation-container" ref={containerRef}>
          {/* Main slide */}
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="presentation-image"
            onClick={toggleZoom}
          />

          {/* Navigation arrows */}
          <div className="nav-arrows">
            <button className="arrow-btn" onClick={prevSlide} disabled={currentSlide === 0}>
              ❮
            </button>
            <button className="arrow-btn" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
              ❯
            </button>
          </div>

          {/* Fullscreen button */}
          <button className="fullscreen-btn" onClick={enterFullScreen}>
            ⛶
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="thumbnail-strip">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              className={`thumb ${index === currentSlide ? "active-thumb" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Zoom modal */}
      {isZoomed && (
        <div className="zoom-modal" onClick={toggleZoom}>
          <img src={slides[currentSlide]} className="zoomed-image" />
        </div>
      )}
    </>
  );
};

export default About;







// import React, { useState } from "react";
// import Navbar from "../components/Navigation";
// import Footer from "../components/Footer";
// import "../styles/About.css";

// const About = () => {
//   const [currentSlide, setCurrentSlide] = useState(1);
//   const totalSlides = 10; // adjust to your actual slide count

//   const nextSlide = () => {
//     if (currentSlide < totalSlides) setCurrentSlide(currentSlide + 1);
//   };

//   const prevSlide = () => {
//     if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="about-page">
//         <div className="presentation-container">
//           <iframe src="https://sltcomlk-my.sharepoint.com/personal/018971_intranet_slt_com_lk/_layouts/15/Doc.aspx?sourcedoc={4a13cd87-4f04-4171-b6db-8b6ce0ec3dd9}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="1480px" height="700px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
//         </div>
//       </div>

//     </>
//   );
// };

// export default About;
