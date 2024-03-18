// CommentSection.js
import React, { useState, useEffect } from 'react';
import UpdateCommentPopup from './UpdateCommentPopup'; // Import the UpdateCommentPopup component
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import user from './../assets/user.png'


function CommentSection({ name, userName }) {
  const [data, setData] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false); // State to control visibility of the update popup
  const [commentToUpdate, setCommentToUpdate] = useState(null); 

  const fetchComments = () => {
    fetch('https://s59-quirkysole.onrender.com/review')
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch(err => console.log("There was an error", err));
  };

  useEffect(() => {
    fetchComments();
  }, [data]);

  const handleDelete = (commentId) => {
    fetch(`https://s59-quirkysole.onrender.com/review/${commentId}`, {
      method: 'DELETE'
    })
      .then((res) => {
        setData(prevData => prevData.filter(comment => comment._id !== commentId));
        toast.success("Comment deleted succesfully.");
      })
      .catch(err => {
       console.log("An error was caught!", err);
       toast.error("There was an error deleting comment.");
      });
    setSelectedComment(null);
  };

  const handleUpdate = async (commentId, updatedComment) => {
    try {
      const updatedObject = {
        comment: updatedComment
      };
  
      const response = await fetch(`https://s59-quirkysole.onrender.com/review/update/${commentId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObject),
      });
      
      if (response.ok) {
        fetchComments();
        setShowUpdatePopup(false); // Close the update popup after successful update
        toast.success("Comment updated successfully");
      } else {
        const errorM = await response.text();
        console.error("Error:", errorM);
        toast.error("Failed to update: " + errorM);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred: " + error.message);
    }
  };

  return (
    <>
      <div>
        {data.map((e) => {
          if (name === e.productName) {
            return (
              <div key={e._id} className="commentBox">
                <div className="comment">
                  <div style={{display:'flex', alignItems:"center", gap:'10px', marginTop:'20px', }}>
                    <img src={user} style={{height:'2vw'}} />
                    <div style= {{fontSize:"1.5vw", fontWeight:"bold"}}>{e.userName}</div>
                  </div>

                  <div style={{fontSize:"1.2vw"}}>{e.comment}</div>
                  
                  <div style={{marginBottom:'10px'}}>Rating : {e.rating}</div>
                </div>
                <button className="updateBtn" onClick={() => setCommentToUpdate(e)}>
                  <img src={editIcon} className="icon" alt="Edit" />
                </button>
                <button className="deleteBtn" onClick={() => setSelectedComment(e)}>
                  <img src={deleteIcon} className="icon" alt="Delete" />
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>

      {selectedComment && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this comment?</p>
          <div>
            <button className="YesNoBtn" onClick={() => handleDelete(selectedComment._id)}>Yes</button>
            <button className="YesNoBtn" onClick={() => setSelectedComment(null)}>No</button>
          </div>
        </div>
      )}

      {commentToUpdate && (
        <UpdateCommentPopup
          comment={commentToUpdate}
          onUpdate={(updatedComment) => handleUpdate(commentToUpdate._id, updatedComment)}
          onCancel={() => setCommentToUpdate(null)}
        />
      )}

      <ToastContainer />
    </>
  );
}

export default CommentSection;
