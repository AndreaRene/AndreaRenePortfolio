import React, { useState } from 'react';
import './LightsPanel.scss';

const LightsPanel = () => {
  const [activeLights, setActiveLights] = useState([]); // Track active lights
  const [showModal, setShowModal] = useState(false); // Show error modal for light 5

  const handleButtonClick = (lightNumber) => {
    if (lightNumber === 5) {
      if (activeLights.length === 4) {
        // Check if all lights are on
        setShowModal(true); // Show modal if all lights are on
        setActiveLights([]); // Reset all lights when modal shows
      }
    } else {
      setActiveLights(
        (prev) =>
          prev.includes(lightNumber)
            ? prev.filter((num) => num !== lightNumber) // Remove from active if already active
            : [...prev, lightNumber] // Add light to active list
      );
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="lights-panel">
      <div className="lights-list">
        <div
          className={`light light-one ${activeLights.includes(1) ? 'active' : ''}`}
        ></div>
        <div
          className={`light light-two ${activeLights.includes(2) ? 'active' : ''}`}
        ></div>
        <div
          className={`light light-three ${activeLights.includes(3) ? 'active' : ''}`}
        ></div>
        <div
          className={`light light-four ${activeLights.includes(4) ? 'active' : ''}`}
        ></div>
      </div>
      <div className="light-controls">
        <button
          className="lights-button"
          onClick={() => handleButtonClick(1)}
        ></button>
        <button
          className="lights-button"
          onClick={() => handleButtonClick(2)}
        ></button>
        <button
          className="lights-button"
          onClick={() => handleButtonClick(3)}
        ></button>
        <button
          className="lights-button"
          onClick={() => handleButtonClick(4)}
        ></button>
        <button
          className="lights-button"
          onClick={() => handleButtonClick(5)}
        ></button>
      </div>

      {/* Modal for Error */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>THERE ARE FOUR LIGHTS</p>
            <button className="modal-close" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default LightsPanel;
