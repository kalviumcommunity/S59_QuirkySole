import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo2.png'

function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <div className='navbar'>
        <div className='navLeft'>
          <img src={logo} style={{height:"5vw", marginTop:"15px", marginRight:"10px"}} />
          <h1 style={{fontSize:"41px"}}>Quirky Sole</h1>
        </div>
      </div>

      <div class="headDiv animated-float">
        <h2 style={{fontSize:"30px"}}>"Dive into the peculiar with our selection of the quirkiest, weirdest shoes you've ever laid eyes on!"</h2>
      </div>

      <div className='parent'>
        <Link to="/slippers"><div className='categories'>Slippers</div></Link>
        <div className='categories'>Crocs</div>
      </div>
    </div>
  )
}

export default LandingPage