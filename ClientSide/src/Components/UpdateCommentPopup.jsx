// UpdateCommentPopup.js
import React, { useState } from 'react';
import App from '../App'

function UpdateCommentPopup({ comment, onUpdate, onCancel }) {
  const [updatedComment, setUpdatedComment] = useState(comment.comment);

  const handleChange = (event) => {
    setUpdatedComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(updatedComment);
  };

  return (
    <div className="update-popup-container">
      <div className="update-popup">
        <h2>Edit Comment</h2>
        <form onSubmit={handleSubmit}>
          <textarea value={updatedComment} onChange={handleChange} />
          <div style={{display:'flex', justifyContent:'center'}}>
            <button type="submit" style={{height:'3vw', width:'6vw'}}>Update</button>
            <button onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateCommentPopup;
