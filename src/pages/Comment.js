import React, { useState } from 'react';
import './Comment.css';

const Comment = ({ onAddComment }) => {
  const [comment, setComment] = useState('');

  const submitCommentHandler = (event) => {
    event.preventDefault();
    if (comment.trim() === '') {
      // Don't add empty comments
      return;
    }

    onAddComment(comment);
    setComment(''); // Clears the comment input after adding
  };

  return (
    <div className="comment">
      <h3>Add a Comment</h3>
      <form onSubmit={submitCommentHandler}>
        <div className="form-control">
          <label htmlFor="comment"></label>
          <textarea
            id="comment"
            rows="5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit">Add Comment</button>
        </div>
      </form>
    </div>
  );
};

export default Comment;
