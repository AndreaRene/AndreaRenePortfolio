import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal'; // Assuming you have the Modal component
import './Carousel.scss';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === items.length - 1 ? currentIndex : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)` // Sliding effect for the carousel
        }}
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img
              src={item.src}
              alt={item.alt}
              className="carousel-img"
              onClick={handleImageClick} // Open modal on image click
              style={{
                cursor: isModalOpen ? 'zoom-out' : 'zoom-in' // Conditionally apply the zoom cursor
              }}
            />
          </div>
        ))}
      </div>
      <button
        className={`carousel-btn prev ${currentIndex === 0 ? 'inactive' : ''}`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        &#10094;
      </button>
      <button
        className={`carousel-btn next ${
          currentIndex === items.length - 1 ? 'inactive' : ''
        }`}
        onClick={handleNext}
        disabled={currentIndex === items.length - 1}
      >
        &#10095;
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          className="modal-img"
          style={{ cursor: 'zoom-out' }}
        />
      </Modal>
    </div>
  );
};

export default Carousel;
