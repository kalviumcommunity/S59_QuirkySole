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

  const [userName, setUserName] = useState("") 
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState("")
  const [age, setAge] = useState("")
  const [upId, setUpId] = useState("")
  const [clickUpdate, setClickUpdate] = useState(false)
  const [refresh, setRefresh] = useState(false)
  var productName = location.state.name
  // console.log(productName)

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
        setRefresh(true)
        // toast.success('Review added successfully!');
            setUserName("")
            setComment("")
            setRating('')
            setAge('')
      })
      .catch(error=>{
        console.log(error)
       // toast.error('Error adding review. Please try again.');
      })
    }
    else{
     // toast.error('Please fill in all fields before submitting.');
    }
  }


  

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
            placeholder='age' 
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
        <CommentSection shoeData={location} name={location.state.name} userName={userName}/>
      </div>
        {/* <ToastContainer/> */}
    </>
  )
}

export default Review