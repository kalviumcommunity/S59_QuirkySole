import React from 'react'
import '../App'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navLeft'>
          <h1 style={{fontSize:"41px"}}>Quirky Sole</h1>
        </div>
        <div className='navRight'>
            <span>Home</span>
            <span>Wishlist</span>
            <span>About Us</span>
        </div>
    </div>
  )
}

export default Navbar