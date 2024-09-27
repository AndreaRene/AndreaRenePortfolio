import './ContactPage.scss';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-hq-wrapper">
        <p className="contact-hq">
          > It is imperative that you establish communication with HQ.
        </p>
        <p className="contact-hq">
          > Send your transmission below and await further instructions.
        </p>
      </div>

      <div className="terminal-panel">
        {/* Left Section: Avatar Selection */}
        <div className="panel-section avatar-selection">
          <div className="avatar-circle"></div>
        </div>

        {/* Top Section: Form */}
        <div className="panel-section user-input">
          <form>
            <p className="date">Mission Date:</p>
            <div className="name-email">
              <input type="text" placeholder="Crewperson Name" />
              <input type="email" placeholder="Electronic Communication ID" />
            </div>
            <textarea placeholder="Message to HQ" />
            <button type="submit">Transmit Message</button>
          </form>
        </div>

        {/* Right Section: Contact Details */}
        <div className="panel-section contact-details">
          <ul>
            <li>Email: example@domain.com</li>
            <li>GitHub: github.com/AndreaRene</li>
            <li>LinkedIn: linkedin.com/in/andrea</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
