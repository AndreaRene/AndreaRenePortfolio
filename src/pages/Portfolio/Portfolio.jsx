import React, { useState, Suspense, useEffect } from 'react';
import Carousel from './Carousel';
import './Portfolio.scss';

const TarotDeck = React.lazy(
  () => import('../../components/ComicBook/TarotDeck')
);
// TODO: Add these back later once there's data
// const Wishly = React.lazy(() => import('../../components/ComicBook/Wishly'));
// const PeaceofMind = React.lazy(() => import('../../components/ComicBook/PeaceofMind'));

import { tarotDeckData } from '../../components/ComicBook/TarotDeck';
// TODO: Add these back later once there's data
// import { wishlyData } from '../../components/ComicBook/Wishly';
// import { peaceOfMindData } from '../../components/ComicBook/PeaceofMind';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('TarotDeck');
  const [projectImages, setProjectImages] = useState(tarotDeckData.images); // Set default images

  useEffect(() => {
    switch (activeTab) {
      case 'TarotDeck':
        setProjectImages(tarotDeckData.images);
        break;
      // TODO: Add these back later once there's data
      // case 'Wishly':
      //   setProjectImages(wishlyData.images);
      //   break;
      // case 'Peace of Mind':
      //   setProjectImages(peaceOfMindData.images);
      //   break;
      default:
        setProjectImages([]);
    }
  }, [activeTab]);

  const renderProject = () => {
    switch (activeTab) {
      case 'TarotDeck':
        return (
          <Suspense fallback={<div>Loading TarotDeck...</div>}>
            <TarotDeck />
          </Suspense>
        );
      // TODO: Add these cases back later
      // case 'Wishly':
      //   return (
      //     <Suspense fallback={<div>Loading Wishly...</div>}>
      //       <Wishly />
      //     </Suspense>
      //   );
      // case 'Peace of Mind':
      //   return (
      //     <Suspense fallback={<div>Loading Peace of Mind...</div>}>
      //       <PeaceofMind />
      //     </Suspense>
      //   );
      default:
        return <div>Select a project to view</div>;
    }
  };

  return (
    <section className="portfolio">
      <div className="comic-wrapper">
        {renderProject()}
        <Carousel items={projectImages} />
      </div>
      <div className="tabs">
        <button
          className={activeTab === 'TarotDeck' ? 'active' : ''}
          onClick={() => setActiveTab('TarotDeck')}
        >
          TarotDeck
        </button>
        <button
          className={activeTab === 'Wishly' ? 'active' : ''}
          onClick={() => setActiveTab('Wishly')}
        >
          Wishly
        </button>
        <button
          className={activeTab === 'Peace of Mind' ? 'active' : ''}
          onClick={() => setActiveTab('Peace of Mind')}
        >
          Peace of Mind
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
