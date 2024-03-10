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
  console.log(location)

  const [data, setData] = useState([])
  const [userName, setUserName] = useState("") 
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState("")
  const [age, setAge] = useState("")
  var productName = location.state.name
  console.log(productName)


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
        console.log(res)
        setData(res)
        toast.success('Review added successfully!');
      })
      .catch(error=>{
        console.log(error.message)
        toast.error('Error adding review. Please try again.');
      })
    }
    else{
      toast.info('Please fill in all fields before submitting.');
    }
  }

  return (
    <>
    <Navbar/>
    <div className='WholeReviewContainer'>
      <div className='reviewContainer'>
          <div className='reviewHeading'>
            Add your Review Here!
          </div>
          <div>
            <input 
            type="text"
            onChange={(e)=>setUserName(e.target.value)} 
            placeholder='Name' 
            className='inputField'/>
          </div>
          <div>
            <input 
            type="text"
            onChange={(e)=>setAge(e.target.value)} 
            placeholder='Age' 
            className='inputField'/>
          </div>
          <div>
            <input 
            type="text"
            onChange={(e)=>setRating(e.target.value)} 
            placeholder='Rating' 
            className='inputField'/>
          </div>
          <div>
            <input 
            type="text"
            onChange={(e)=>setComment(e.target.value)} 
            placeholder='Comment' 
            className='inputField'/>
          </div>
          <button onClick={handleSubmit} className='commentBtn'>Add Comment</button>
        </div>
        
        {/* <pre>{JSON.stringify(data)}</pre> */}

      </div>
      <div className='commentContainer'>
        <CommentSection shoeData={location} name={location.state.name}/>
      </div>
        <ToastContainer/>
    </>
  )
}

export default Review