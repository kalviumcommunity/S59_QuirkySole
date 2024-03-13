import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import CommentSection from '../Components/CommentSection';
import '../App.css';
import Navbar from '../Components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Review() {

  const location = useLocation();
  const state = location.state.data

  const [data, setData] = useState([])
  const [userName, setUserName] = useState("") 
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState("")
  const [age, setAge] = useState("")
  const [upId, setUpId] = useState("")
  const [clickUpdate, setClickUpdate] = useState(false)
  var productName = location.state.name
  console.log(productName)

  const handleEntities=(e)=>{
    setUserName(e.userName)
    setComment(e.comment)
    setRating(e.rating)
    setAge(e.age)

  }

  const handleSubmit = () => {
    if(userName && comment && rating && age) {
      const list = {
        userName: userName,
        comment: comment,
        rating: rating,
        age: age,
        productName: productName
      }

      fetch('https://s59-quirkysole.onrender.com/review', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(list)
      })
      .then(res=>res.json())
      .then(res=>{
        setData(res)
        toast.success('Review added successfully!');
      })
      .catch(error=>{
        console.log(error.message)
        toast.error('Error adding review. Please try again.');
      })
    }
    else{
      toast.error('Please fill in all fields before submitting.');
    }
  }

  const handleUpdate = async (commentId) => {
    try {
      const updatedObject = {
        userName: userName || "",
        age: age || "",
        comment: comment || "",
        rating: rating || ""
      };
  
      const response = await fetch(`https://s59-quirkysole.onrender.com/review/update/${commentId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObject),
      });
      
      console.log('Response:', response);
      
      if (response.ok) {
        const updatedShoe = await response.json();
        toast.success("Comment updated successfully");
        
        setData(data.map(each => each._id === commentId ? updatedShoe : each));
      } else {
        const errorM = await response.text();
        toast.error("Failed to update: " + errorM);
        console.error("Error:", errorM);
      }
      
    } catch (error) {
      toast.error("An error occurred: " + error.message);
      console.error("Error:", error);
    }
  };
  

  return (
    <>
    <Navbar/>
    <div className='WholeReviewContainer'>
      <div className='reviewContainer'>
          {clickUpdate?<div className='reviewHeading'>
            Update your Review Here!
          </div>:<div className='reviewHeading'>
            Add your Review Here!
          </div>}
          <div>
            <input 
            type="text"
            onChange={(e)=>setUserName(e.target.value)} 
            placeholder='Name' 
            className='inputField'
            value={userName}/>
          </div>
          <div>
            <input 
            type="text"
            onChange={(e)=>setAge(e.target.value)} 
            placeholder='Age' 
            className='inputField'
            value={age}/>
          </div>
          <div>
            <input 
            type="text"
            onChange={(e)=>setRating(e.target.value)} 
            placeholder='Rating' 
            className='inputField'
            value={rating}/>
          </div>
          <div>
            <input 
            type="text"
            onChange={(e)=>setComment(e.target.value)} 
            placeholder='Comment' 
            className='inputField'
            value={comment}/>
          </div>
          {clickUpdate ? <button onClick={()=>handleUpdate(upId)} className='commentBtn'>Update Comment</button>:<button onClick={handleSubmit} className='commentBtn'>Add Comment</button>}
        </div>
        
        {/* <pre>{JSON.stringify(data)}</pre> */}

      </div>
      <div className='commentContainer'>
        <CommentSection shoeData={location} name={location.state.name} setUpId={setUpId} setClickUpdate = {setClickUpdate} handleEntities={handleEntities}/>
      </div>
        <ToastContainer/>
    </>
  )
}

export default Review