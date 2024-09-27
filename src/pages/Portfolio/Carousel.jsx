import React, { useState, useEffect } from 'react';
import ComicModal from '../../components/Modals/ComicModal';
import './Carousel.scss';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reset the index when the items change
  useEffect(() => {
    setCurrentIndex(0);
  }, [items]);

  // Handle previous button
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Handle next button
  const handleNext = () => {
    const newIndex =
      currentIndex === items.length - 1 ? currentIndex : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Open modal for the image
  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Fallback for no items
  if (items.length === 0) {
    return (
      <div className="carousel no-images">
        <p>Stay tuned, heroes! The next thrilling issue is on its way!</p>
      </div>
    );
  }

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            {item?.src ? (
              <img
                src={item.src}
                alt={item.alt || 'Carousel image'}
                className="carousel-img"
                onClick={handleImageClick}
                style={{
                  cursor: isModalOpen ? 'zoom-out' : 'zoom-in'
                }}
              />
            ) : (
              <div className="no-image">Image not available</div>
            )}
          </div>
        ))}
      </div>

      {/* Previous button */}
      <button
        className={`carousel-btn prev ${currentIndex === 0 ? 'inactive' : ''}`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        &#10094;
      </button>

      {/* Next button */}
      <button
        className={`carousel-btn next ${
          currentIndex === items.length - 1 ? 'inactive' : ''
        }`}
        onClick={handleNext}
        disabled={currentIndex === items.length - 1}
      >
        &#10095;
      </button>

      {/* Modal */}
      <ComicModal isOpen={isModalOpen} onClose={closeModal}>
        <img
          src={items[currentIndex]?.src}
          alt={items[currentIndex]?.alt}
          className="modal-img"
          style={{ cursor: 'zoom-out' }}
        />
      </ComicModal>
    </div>
  );
};

export default Carousel;
