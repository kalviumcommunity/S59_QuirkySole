import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className='navbar'>
      <div className='navLeft'>
        <h1 style={{ fontSize: '41px' }}>Quirky Sole</h1>
      </div>
      <div className='navRight'>
        <span>Home</span>
        <Link className='navLinks' to='/dropdown'><span >Reviews</span></Link>
        <Link to= '/login'><button className='SignBtn'>Sign Up</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
