import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Add EmailJS import
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

  const handleClick = () => {
    setIsMessageRead(true);
    startTypewriterEffect();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <div className="avatar-circle"></div>
        </div>

        <LightsPanel />

        <div className="panel-section user-input">
          <form onSubmit={handleSubmit}>
            <p className="date">Mission Date:</p>
            <div className="name-email">
              <input
                type="text"
                name="from_name"
                placeholder="Crewperson Name"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Electronic Communication ID"
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message to HQ"
              onChange={handleChange}
              required
            />
            <button className="message-button" type="submit">
              Transmit Message
            </button>
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
