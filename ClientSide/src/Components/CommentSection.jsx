import React from 'react'
import { useState, useEffect } from 'react'

function CommentSection({ shoeData, name }) {
    console.log(name)
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:1213/review')
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            setData(res)
        })
        .catch(err=> console.log("there was an error"))
    }, [])


  return (
    <>
    <div>
        {data.map((e) => {
            if (name == e.productName) {
                return (
                    <div key={e._id}>
                        {e.userName}
                        {e.comment}
                        {e.rating}
                    </div>
                )
            }
        })}
    </div>
    </>
  )
}

export default CommentSection