import React from 'react'
import '../App'
import logo from '../assets/logo2.png'


function Navbar() {
  return (
    <div className='navbar'>
        <div className='navLeft'>
          {/* <img src={logo} style={{height:"5vw", marginTop:"15px", marginRight:"10px"}} /> */}
          <h1 style={{fontSize:"41px"}}>Quirky Sole</h1>
        </div>
    </div>
  )
}

export default Navbar