import React from 'react';
import { Link } from 'react-router-dom';
import './AllQuotes.css';

const AllQuotes = ({ quotes }) => {
  return (
    <div className="quotes">
      <div className="quote-list">
        {quotes.map((quote, index) => (
          <div className="quote-card" key={index}>
            <div className="quote-text">{quote.text}</div>
            <div className="quote-author">- {quote.author}</div>
            <Link to={`/quotedetails/${index}?quote=${quote.text}&author=${quote.author}`} className="details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllQuotes;
