import React, { useState, useEffect } from 'react';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png'; 
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function CommentSection({ name ,setUpId, setClickUpdate,handleEntities, refresh}) {
  const [data, setData] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);
  

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
  }, [refresh]);


  const handleDelete = (commentId) => {
    fetch(`https://s59-quirkysole.onrender.com/review/${commentId}`, {
      method: 'DELETE'
    })
      .then((res) => {
        setData(prevData => prevData.filter(comment => comment._id !== commentId));
        fetchComments()
        toast.success("Comment deleted succesfully.")
      })
      .catch(err => {
       console.log("An error was caught!", err);
       toast.error("There was an error deleting comment.")
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
                  <div>{e.age}</div>
                </div>
                <button className='updateBtn' onClick={()=>{setClickUpdate(true),setUpId(e._id),handleEntities(e)}}>
                  <img src={editIcon} className="icon" alt="Edit" />
                </button>
                <button className='deleteBtn' onClick={() => setSelectedComment(e)}>
                  <img src={deleteIcon} className='icon' alt="Delete" />
                </button>

                {selectedComment && selectedComment._id === e._id && (
                  <div className="confirmation-dialog">
                    <p>Are you sure you want to delete this comment?</p>
                    <div>
                      <button className='YesNoBtn' onClick={() => handleDelete(selectedComment._id)}>Yes</button>
                      <button className='YesNoBtn' onClick={() => setSelectedComment(null)}>No</button>
                    </div>
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
      <ToastContainer/>
    </>
  );
}

export default CommentSection;
