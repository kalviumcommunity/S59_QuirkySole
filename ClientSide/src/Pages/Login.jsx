import React, { useState } from 'react'

function Login() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:1213/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        })
      })

      if (res.ok) {
        setLogin(true)
        document.cookie = `username=${username};expires=Thu, 01 Jan 9999 00:00::00 UTC`
        console.log("login successful")
      }
      else {
        console.log("there was an error", res.statusText)
      }
    }
    catch {
      console.log("couldn't log in for some reason")
    }
  }

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:1213/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        })
      })

      if (res.ok) {
        setLogin(false)
        document.cookie = 'username=;expires=Thu, 01 Jan 1900 00:00::00 UTC'
        console.log("logout successful")
      }

      else {
        console.log("there was an error", res.statusText)
      }

    }

    catch {
      console.log("couldn't log our for some reason")
    }
  }


  return (
    <>
    {!login ? (
      <div>
      Name:
      <div><input type="text" value={username} onChange={(e) => setUserName(e.target.value)}/></div>
      Password:
      <div><input type="text" value = {password} onChange={(e) => setPassword(e.target.value)}/></div>

      <button onClick={(e) => handleLogin(e)}>Login</button>
  </div>
      ) :
    (
      <div>
        <h2>WELCOME {username}</h2>
        <button onClick={handleLogout}> Logout</button>
      </div>
    )    
      
      
      }
      </>
  )
}

export default Login