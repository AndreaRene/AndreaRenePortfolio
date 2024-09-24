import React from 'react';
import tdlogo from '../../assets/tdlogo.png';
import PageOne from '../../assets/comic_pages/tarot_deck/td_comic_page1.png';
import PageTwo from '../../assets/comic_pages/tarot_deck/td_comic_page2.png';
import './ComicBook.scss';

export const tarotDeckData = {
  title: 'TarotDeck',
  images: [
    { src: PageOne, alt: 'Tarot Deck Page One' },
    { src: PageTwo, alt: 'Tarot Deck  Page Two' }
  ]
};

const TarotDeck = () => {
  return (
    <div className="tarot-deck">
      <h2 className="project-h2">
        <img src={tdlogo} alt="TarotDeck logo" className="td-icon" />
        Tarot Deck
        <a
          className="gh-link"
          href="https://github.com/AndreaRene/tarot-application"
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

export default TarotDeck;
