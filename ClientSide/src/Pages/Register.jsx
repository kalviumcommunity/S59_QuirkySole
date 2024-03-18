import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify'

function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const namePattern = /^[A-Z][a-zA-Z]*$/;
  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;


  const validateInputs = () => {
    if (!namePattern.test(name)) {
      toast.error("Name must start with a capital letter.");
      return false;
    }
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email.");
      return false;
    }
    if (!passwordPattern.test(password)) {
      toast.error("Password must include uppercase and lowercase letters, a number, and a special character.");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (!validateInputs()) return;

    try {
      const response = await fetch('https://s59-quirkysole.onrender.com/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
        }),
      });

      if (response.ok) {
        toast.success('Registration successful');
      } 
      else {
        const errorData = await response.json();
        toast.error(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      toast.error('Error during registration');
    }
  };

  return (
    <div>
      <div className='wholeRegisterPage'>
        <div className='registrationBox'>
          <h1 className='rHead'>Register</h1>
          <div>
            Name:<div><input className='userInputFields' type="text" value={name} onChange={(e) => setName(e.target.value)}/></div>
          </div>
          <div>
            Email<div><input className='userInputFields' type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          </div>
          <div>
            Phone:<div><input className='userInputFields' type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /></div>
          </div>
          <div>
            Password:<div><input className='userInputFields' type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
          </div>
          <button onClick={handleRegister} className='rBtn'>Register</button>
          
          <p style={{ marginTop: '10px', fontSize:'1.3vw' }}>Already a user? <Link to="/login">Log in</Link></p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Register;
