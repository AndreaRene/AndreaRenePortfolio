import React, { useState } from 'react';
import { startTypewriterEffect } from './ContactPage';

import './ContactPage.scss';
import ControlPanel from './ControlPanel';
import LightsPanel from './LightsPanel';

const ContactPage = () => {
  const [isMessageRead, setIsMessageRead] = useState(false);

  const handleClick = () => {
    setIsMessageRead(true);
    startTypewriterEffect();
  };

  return (
    <div className="contact-page">
      <div className="terminal-panel">
        <div className="contact-hq-wrapper">
          {!isMessageRead && (
            <>
              <p id="initial-message">You have a new message from HQ.</p>
              <button className="message-button" onClick={handleClick}>
                Retrive Message
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
          <form>
            <p className="date">Mission Date:</p>
            <div className="name-email">
              <input type="text" placeholder="Crewperson Name" />
              <input type="email" placeholder="Electronic Communication ID" />
            </div>
            <textarea placeholder="Message to HQ" />
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
