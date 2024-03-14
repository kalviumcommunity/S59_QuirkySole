import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:1213/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      
      
      if (response.ok) {
        const {message,user,token} = await response.json();
        setLogin(true);
        if(token){
          document.cookie = `username=${username};expires=Thu, 01 Jan 9999 00:00::00 UTC`;
          document.cookie = `token=${token};expires=Thu, 01 Jan 9999 00:00::00 UTC`;
        }
        
        console.log('Login successful');
      } else {
        console.error('Login failed:', message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error during login:', error.message || 'Unknown error');
    }
  };
  

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:1213/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (res.ok) {
        setLogin(false);
        document.cookie = 'username=; expires=Thu, 01 Jan 1000 00:00:00 UTC';
        document.cookie = 'token=; expires=Thu, 01 Jan 1000 00:00:00 UTC';
        console.log('logout successful');
      } else {
        console.log('there was an error', res.statusText);
      }
    } catch {
      console.log("couldn't log our for some reason");
    }
  }

  var cookies = document.cookie;
  var usernameCookie;
  useEffect(() => {
    // console.log(cookies)
    usernameCookie = cookies
      .split(";")
      .find((cookie) => cookie.trim().startsWith("username="));
    if (usernameCookie) {
      const username = usernameCookie.split("=")[1].trim();
      // console.log(username);
      setUserName(username);
    }
  }, [cookies]);

  return (
    <div>

      <div className='WholeLoginContainer'>
        {!login && !usernameCookie ? (
          <div className='loginBox'>
            <h2 style={{margin:"0"}}>NEW TO OUR SITE ?</h2>
            <span style={{fontSize:"1.3vw"}}>Click <Link to={'/register'}>here </Link>to register</span>

            <div>
            Name:<div><input className='userInputFields' type="text" value={username} onChange={(e) => setUserName(e.target.value)} /></div>
            </div>
            
            <div>
            Password:<div><input className='userInputFields' type="text" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
            </div>
            
            <button onClick={(e) => handleLogin(e)} className='rBtn'>Login</button>
            <Link to='/'><button> Home</button></Link>
          </div>
        ) : (
          <div>
            <div className='logoutBox'>
              <h1>WELCOME {username}</h1>
              <button onClick={handleLogout} className='lgOutBtn'> Logout</button>
              <Link to='/'><button > Home</button></Link>
            </div>  
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Login;
