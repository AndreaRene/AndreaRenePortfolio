import React from 'react';
import './ControlPanel.scss';

const ControlPanel = () => {
  // const buttons = ['Initiate', 'Reset', 'Launch'];
  const toggles = ['Engine', 'Shields', 'Sensors'];
  const ridiculousButtons = [
    'Feedback Loop',
    'Invert Deflector',
    'Ridiculous Speed'
  ];
  const sliders = ['Warp Factor', 'Plasma Levels', 'Time Dilation'];

  return (
    <div className="control-panel">
      <div className="panel-toggles">
        {toggles.map((toggle, index) => (
          <div className="toggle-switch" key={index}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <p>{toggle}</p>
          </div>
        ))}
      </div>
      <section className="center-controls">
        <div className="panel-sliders">
          {sliders.map((slider, index) => (
            <div className="slider-container" key={index}>
              <input type="range" id={slider} name={slider} min="1" max="100" />
              <label htmlFor={slider}>{slider}</label>
            </div>
          ))}
        </div>
      </section>
      <div className="ridiculous-buttons">
        {ridiculousButtons.map((button, index) => (
          <button className="ridiculous-button" key={index}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
