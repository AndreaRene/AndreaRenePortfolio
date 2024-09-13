import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://www.gateworld.net/wiki/Comtrya"
        className="footer-click"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Gateworld Comtrya page (Stargate reference)"
      >
        <p>Comtrya!</p>
      </a>
      <p>You have reached the end.</p>
    </footer>
  );
};

export default Footer;
