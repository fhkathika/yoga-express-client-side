import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'
const Login = () => {
  const {user,signInUsingGoogle}=useAuth()
    const handleRegistration=e=>{
        e.preventDefault()
    }
    return (
        <div className="mx-5 login-form ">
           <h3 style={{color:"#513125"}}>Log In</h3> 
           <div>
           <form onSubmit={handleRegistration}>
             <input className="input-field" type="email" name="" id="" placeholder="Your Email"></input>
             <br />
           <input className="input-field" type="password" name="" id="" ></input>
           <br />
           <input className="login-form-button" type="submit"value="Submit"></input>
           </form>
           <p>new to Yoga-Express?<Link to="/register">Create Account</Link></p>
          <div>
            <h3>Or</h3>
            <button onClick={signInUsingGoogle} className="login-form-button">Google Sign in</button>
          </div>
           </div>
           

        </div>
    );
};

export default Login;