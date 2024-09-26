import wishlylogo from '../../assets/wishlylogo.svg';
import PageOne from '../../assets/comic_pages/wishly/wishly_comic_page1.png';

export const wishlyData = {
  title: 'Wishly',
  images: [{ src: PageOne, alt: 'Wishly Page One' }]
};

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
