import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import CommentSection from '../Components/CommentSection';
import '../App.css';


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
    
    console.log("userName:", userName);
  console.log("comment:", comment);
  console.log("rating:", rating);
  console.log("age:", age);

    if(userName && comment && rating && age) {
      const list = {
        userName: userName,
        comment: comment,
        rating: rating,
        age: age,
        productName: productName
      }

      fetch('http://localhost:1213/review', {
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
      })
      .catch(error=>{
        console.log(error.message)
      })
    }
  }


  return (
    <>
      <div className='reviewContainer'>
        <div>
          <input type="text"
          onChange={(e)=>setUserName(e.target.value)} placeholder='Name' />
        </div>

        <div>
          <input type="text"
          onChange={(e)=>setAge(e.target.value)} placeholder='Age'/>
        </div>

        <div>
          <input type="text"
          onChange={(e)=>setRating(e.target.value)} placeholder='Rating'/>
        </div>

        <div>
          <input type="text"
          onChange={(e)=>setComment(e.target.value)} placeholder='Comment'/>
        </div>
      <button onClick={handleSubmit}>Add Comment</button>
      </div>
      


      <pre>{JSON.stringify(data)}</pre>

      <CommentSection shoeData={location} name={location.state.name}/>



    </>
  )
}

export default Review