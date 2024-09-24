import wishlylogo from '../../assets/wishlylogo.svg';

const Wishly = () => {
  return (
    <div className="wishly">
      <h2 className="project-h2">
        <img src={wishlylogo} alt="Wishly logo" className="wishly-icon" />
        Wishly
        <a
          className="gh-link"
          href="https://github.com/AndreaRene/Wishly"
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
      <p className="no-deploy">A Work in Progress!</p>
    </div>
  );
};

export default Wishly;
