import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializationApp from '../Login/Firebase/Firebase.init';
initializationApp()

const Register = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const auth=getAuth()
  // handle email
  const handleEmailChange=(e)=>{
    setEmail(e.target.value)
  }
  // handle password
  const handlePasswordChange=(e)=>{
    console.log(e.target.value)
    if(e.target.value.length<6){
      console.error("password too small");
    }
    else{
      setPassword(e.target.value)
    }
  }
  const handleRegister=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
    const {user,signInUsingGoogle}=useAuth()
    return (
        <div>
            <div>
                <h2 style={{color:"#513125"}} className="login-form"> Create Account</h2>
                <form onSubmit={handleRegister}>
             <input onBlur={handleEmailChange}  className="input-field" type="email" placeholder="Your Email" required></input>
             <br />
           <input onBlur={handlePasswordChange} className="input-field" type="password" placeholder="Enter Password" required ></input>
           <br />
           <input className="login-form-button" type="submit"value="Submit"></input>
           </form>
           <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
            <div>
            <h3>Or</h3>
            <button  onClick={signInUsingGoogle} className="login-form-button">Google Sign in</button>
          </div>
        </div>
    );
};

export default Register;