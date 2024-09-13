import PropTypes from 'prop-types';
import './JournalEntry.scss';

const JournalEntry = ( { title, content } ) => {
    return (
        <div className="journal-entry">
            <h3 className="journal-entry-title">{ title }</h3>
            <p className="journal-entry-content">{ content }</p>
        </div>
    );
};

JournalEntry.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default JournalEntry;
