import React from 'react';
import pomicon from '../../assets/peaceofmindicon.png';

const PeaceofMind = () => {
  return (
    <div className="peace-of-mind">
      <h2 className="project-h2">
        <a
          href="https://peace-of-mind-app-v2.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="pom-link"
        >
          <img src={pomicon} alt="Peace of Mind Icon" className="pom-icon" />
        </a>
        Peace of Mind
        <a
          className="gh-link"
          href="https://github.com/AndreaRene/Peace-Of-Mind_V2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="gh-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="GitHub logo"
          />
        </a>
      </h2>
      <a
        href="https://peace-of-mind-app-v2.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="explore-link"
      >
        <p className="deployment-link">Explore Peace of Mind</p>
      </a>
    </div>
  );
};

export default PeaceofMind;
