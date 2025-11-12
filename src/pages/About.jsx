import React, { useState } from "react";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/About.css";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10; // adjust to your actual slide count

  const nextSlide = () => {
    if (currentSlide < totalSlides) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
  };

  return (
    <>
      <Navbar />

      <div className="about-page">
        <div className="presentation-container">
          <iframe src="https://sltcomlk-my.sharepoint.com/personal/018971_intranet_slt_com_lk/_layouts/15/Doc.aspx?sourcedoc={4a13cd87-4f04-4171-b6db-8b6ce0ec3dd9}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="1480px" height="700px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
        </div>
      </div>

    </>
  );
};

export default About;
