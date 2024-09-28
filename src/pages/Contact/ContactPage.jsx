import React, { useState } from 'react';
import { startTypewriterEffect } from './ContactPage';

import './ContactPage.scss';
import ControlPanel from './ControlPanel';
import LightsPanel from './LightsPanel';

const ContactPage = () => {
  const [isMessageRead, setIsMessageRead] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false); // Control error modal

  const handleClick = () => {
    setIsMessageRead(true);
    startTypewriterEffect();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Check if any of the fields are empty
    if (!name || !email || !message) {
      setShowModal(true); // Show error modal
      return; // Prevent email submission if there are errors
    }

    setShowModal(false); // Hide error modal if all fields are filled

    // Email sending logic
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
        },
        (error) => {
          console.log('Error sending email:', error.text);
        }
      );
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="contact-page">
      <div className="terminal-panel">
        <div className="contact-hq-wrapper">
          {!isMessageRead && (
            <>
              <p id="initial-message">You have a new message from HQ.</p>
              <button className="message-button" onClick={handleClick}>
                Retrieve Message
              </button>
            </>
          )}

          <p className="contact-hq" id="line1">
            {'>'} It is imperative that you establish communication with HQ.
          </p>
          <p className="contact-hq" id="line2">
            {'>'} Send your transmission below and await further instructions.
          </p>
        </div>

        <div className="panel-section avatar-selection">
          {/* First Avatar: Pulsing Glow with Waves */}
          <div className="avatar-circle">
            <div className="ping"></div>
            <div className="ping"></div>
            <div className="ping"></div>
          </div>

          {/* Second Avatar: Rotating Radar Scan */}
          <div className="avatar-circle radar-scan">
            <div className="radar"></div>
          </div>
        </div>

        <LightsPanel />

        <div className="panel-section user-input">
          <form onSubmit={handleSubmit} className="contact-form">
            <p className="date">Mission Date:</p>
            <div className="name-email">
              <input
                type="text"
                placeholder="Crewperson Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Electronic Communication ID"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <textarea
              placeholder="Message to HQ"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button className="message-button" type="submit">
              Transmit Message
            </button>

            {/* Error Modal */}
            {showModal && (
              <div className="error-modal">
                <div className="error-modal-content">
                  <p>You must construct additional info</p>
                  <button
                    className="error-modal-close"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="panel-section contact-details">
          <ul>
            <li>Email: andrea@interhact.net</li>
            <li>GitHub: github.com/AndreaRene</li>
            <li>LinkedIn: linkedin.com/in/andreapresto</li>
          </ul>
        </div>
        <ControlPanel />
      </div>
    </div>
  );
};

export default ContactPage;
