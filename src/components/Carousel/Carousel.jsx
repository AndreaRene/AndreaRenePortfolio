import React, { useState } from 'react';
import './Carousel.scss'; // create this file for styling

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={item.src} alt={item.alt} className="carousel-img" />
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
