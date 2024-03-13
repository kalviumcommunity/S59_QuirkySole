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
        <span>Wishlist</span>
        <button onClick={togglePopup}>Sign Up</button>
        {isPopupOpen && (
          <>
            <div className="popup-overlay" onClick={togglePopup}></div>
            <div className="popup-content">
              <p>Are you a new user or an existing user?</p>
              <div style = {{display:"flex", flexDirection:"row",justifyContent:"space-evenly"}}>
                <Link to='/register'><button onClick={togglePopup} className='userBtn'>Register</button></Link>
                <Link to='/login'><button onClick={togglePopup} className='userBtn'>Login</button></Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
