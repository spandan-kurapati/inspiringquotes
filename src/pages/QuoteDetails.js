import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import './QuoteDetails.css';

const QuoteDetails = ({ quotes }) => {
  const { quoteId } = useParams();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  // Finds the selected quote by quoteId
  const selectedQuote = quotes.find((quote, index) => index.toString() === quoteId);

  const addCommentHandler = (commentText) => {
    setComments((prevComments) => [...prevComments, commentText]);
  };

  return (
    <div className="quote-details">
      <h2>Quote Details</h2>
      {selectedQuote && (
        <>
          <div className="quote-info">
            <p>Author: {selectedQuote.author}</p>
            <p>Quote: {selectedQuote.text}</p>
          </div>
        </>
      )}
      <Comment onAddComment={addCommentHandler} comment={comment} setComment={setComment} />
      <div className="comments">
        <h3>Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuoteDetails;
