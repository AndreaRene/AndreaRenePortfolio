import React, { useState, Suspense } from 'react';
import './Portfolio.scss';

const TarotDeck = React.lazy(
  () => import('../../components/ComicBook/TarotDeck')
);
const Wishly = React.lazy(() => import('../../components/ComicBook/Wishly'));
const PeaceofMind = React.lazy(
  () => import('../../components/ComicBook/PeaceofMind')
);

function Portfolio() {
  const [activeTab, setActiveTab] = useState('TarotDeck');

  const renderProject = () => {
    switch (activeTab) {
      case 'TarotDeck':
        return (
          <Suspense fallback={<div>Loading TarotDeck...</div>}>
            <TarotDeck />
          </Suspense>
        );
      case 'Project2':
        return (
          <Suspense fallback={<div>Loading Wishly...</div>}>
            <Wishly />
          </Suspense>
        );
      case 'Project3':
        return (
          <Suspense fallback={<div>Loading Peace of Mind...</div>}>
            <PeaceofMind />
          </Suspense>
        );
      default:
        return <div>Select a project to view</div>;
    }
  };

  return (
    <section className="portfolio">
      <div className="comic-wrapper">{renderProject()}</div>
      <div className="tabs">
        <button
          className={activeTab === 'TarotDeck' ? 'active' : ''}
          onClick={() => setActiveTab('TarotDeck')}
        >
          TarotDeck
        </button>
        <button
          className={activeTab === 'Wishly' ? 'active' : ''}
          onClick={() => setActiveTab('Project2')}
        >
          Wishly
        </button>
        <button
          className={activeTab === 'Peace of Mind' ? 'active' : ''}
          onClick={() => setActiveTab('Project3')}
        >
          Peace of Mind
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
