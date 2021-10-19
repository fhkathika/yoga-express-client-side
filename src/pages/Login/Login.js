import React, { useState } from 'react';
import { Link,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'
const Login = () => {
  const {signInUsingGoogle}=useAuth()
  const [isLoading,setIsLoading]=useState(true)
  const location=useLocation()
 const history=useHistory()
 const redirect_uri=location.state?.from || '/home'
    const handleRegistration=e=>{
        e.preventDefault()
    }
    // function for google log in
    const handleGoogleLogIn=()=>{
      signInUsingGoogle()
     
      .then(result=>{
       history.push(redirect_uri)
                })
      .finally(()=>setIsLoading(false))
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
            <button onClick={handleGoogleLogIn} className="login-form-button">Google Sign in</button>
          </div>
           </div>
           

        </div>
    );
};

export default Login;