import React from 'react';
import PageOne from '../../assets/comic_pages/tarot_deck/td_comic_page1.png';
import './ComicBook.scss';

export const tarotDeckData = {
  title: 'TarotDeck',
  images: [{ src: PageOne, alt: 'Tarot Deck Page One' }]
};

const TarotDeck = () => {
  return (
    <div className="tarot-deck">
      <h2 className="project-h2">Tarot Deck</h2>
    </div>
  );
};

export default TarotDeck;
