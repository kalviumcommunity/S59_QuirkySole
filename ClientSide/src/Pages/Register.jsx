import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhonenNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:1213/user/register', {
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
      } else {
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
            Name:<div><input className='userInputFields' type="text" value={name} onChange={handleNameChange}/></div>
          </div>
          <div>
            Email<div><input className='userInputFields' type="text" value={email} onChange={handleEmailChange} /></div>
          </div>
          <div>
            Phone:<div><input className='userInputFields' type="text" value={phoneNumber} onChange={handlePhonenNumberChange} /></div>
          </div>
          <div>
            Password:<div><input className='userInputFields' type="password" value={password} onChange={handlePasswordChange} /></div>
          </div>
          <button onClick={handleRegister} className='rBtn'>Register</button>
          
          <p style={{ marginTop: '10px', fontSize:'1.3vw' }}>Already a user? <Link to="/login">Log in</Link></p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
