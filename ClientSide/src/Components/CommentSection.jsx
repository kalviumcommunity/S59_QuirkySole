import React, { useState, useEffect } from 'react';
import deleteIcon from '../assets/delete.png';
import edit from '../assets/edit.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CommentSection({ shoeData, name }) {
  const [data, setData] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);

  useEffect(() => {
    fetch('https://s59-quirkysole.onrender.com/review')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res);
      })
      .catch(err => console.log("There was an error"));
  }, [data]);

  const handleDelete = commentId => {
      fetch(`https://s59-quirkysole.onrender.com/review/${commentId}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setData(prevData => prevData.filter(comment => comment._id !== commentId));
          toast.success("Comment deleted successfully");
        })
        .catch(err => {
          console.log("An error was caught!");
          toast.error("Comment was not deleted");
        });
    setSelectedComment(null);
  };
  
  return (
    <>
      <div>
        {data.map(e => {
          if (name === e.productName) {
            return (
              <div key={e._id} className='commentBox'>
                <div className='comment'>
                  <div>{e.userName}</div>
                  <div>{e.comment}</div>
                </div>
                <button className='updateBtn'>
                  <img src={edit} className="icon" alt="Edit" />
                </button>
                <button className='deleteBtn' onClick={() => setSelectedComment(e)}>
                  <img src={deleteIcon} className='icon' alt="Delete" />
                </button>

                {selectedComment && (
                  <div className="confirmation-dialog">
                    <p>Are you sure you want to delete this comment?</p>
                    <div>
                      <button onClick={() => handleDelete(selectedComment._id)}>Yes</button>
                      <button onClick={() => setSelectedComment(null)}>No</button>
                    </div>
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
      <ToastContainer />
    </>
  );
}

export default CommentSection;
