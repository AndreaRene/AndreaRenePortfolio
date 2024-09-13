import { useState } from 'react';
import PropTypes from 'prop-types';
import './Journal.scss';
import JournalEntry from './JournalEntry';

const Journal = ({ entries }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < entries.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!entries || !Array.isArray(entries) || entries.length === 0) {
    return <div>No journal entries available</div>;
  }

  return (
    <div className="journal">
      {/* Pass title and content separately */}
      <JournalEntry
        title={entries[currentPage].title}
        content={entries[currentPage].content}
      />
      <div className="journal-controls">
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === entries.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

Journal.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Journal;
