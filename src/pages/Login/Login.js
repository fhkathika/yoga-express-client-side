import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'
import initializationApp from './Login/Firebase/Firebase.init';
initializationApp()
const Login = () => {
  const { signInUsingGoogle } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({})
  const [error, setError] = useState("")
  const auth = getAuth()

  const location = useLocation()
  const history = useHistory()
  const redirect_uri = location.state?.from || '/home'
  // const handleRegistration=e=>{
  //     e.preventDefault()
  // }
  // function for google log in
  const handleGoogleLogIn = () => {
    signInUsingGoogle()

      .then(result => {
        history.push(redirect_uri)
      })

  }
  // handle email
  const handleEmailChange = (e) => {
    setEmail(e.target.value)

  }
  // handle password
  const handlePasswordChange = (e) => {
    console.log(e.target.value)
    if (e.target.value.length < 6) {
      setError("password too small");
    }
    else {
      setPassword(e.target.value)
      setError("")
    }
  }

  // handle login
  const handleLogIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri)
        const user = result.user
        const { email, displayName, photoUrl } = result.user
        const userInfo = {
          name: displayName,
          email: email,
          photoUrl: photoUrl
        }
        setUser(userInfo)
      })
      .catch = ((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
        setError(errorMessage)
        console.log(error)
      })
      

  }
  return (
    <div className="mx-5 login-form ">
      <h3 style={{ color: "#513125" }}>Log In</h3>
      <div>
        <form onSubmit={handleLogIn}>

          <input onBlur={handleEmailChange} className="input-field" type="email" placeholder="Your Email"></input>
          <br />
          <input onBlur={handlePasswordChange} className="input-field" type="password" ></input>
          <br />
          <input className="login-form-button" type="submit" value="Submit"></input>
        </form>
        <p>new to Yoga-Express?<Link to="/register">Create Account</Link></p>
        <div>
          <h3>Or</h3>
          <button onClick={handleGoogleLogIn} className="login-form-button">Google Sign in</button>
        </div>
        <p>{error}</p>
      </div>


    </div>
    
  );
 
};

export default Login;