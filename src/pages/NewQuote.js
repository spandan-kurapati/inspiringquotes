import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NewQuote.css';

const NewQuote = ({ onAddQuote }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const newQuote = {
      text: quote,
      author: author,
    };

    onAddQuote(newQuote);

    setQuote('');
    setAuthor('');

    // Redirects to the AllQuotes page
    navigate('/');
  };

  return (
    <div className="new-quote">
      <h2>Add a New Quote</h2>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="quote">Your Quote</label>
          <textarea
            id="quote"
            rows="5"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit">Add Quote</button>
        </div>
      </form>
      <Link to="/" className="back-link">
        Back to All Quotes
      </Link>
    </div>
  );
};

export default NewQuote;
