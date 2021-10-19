import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const {user,signInUsingGoogle}=useAuth()
    return (
        <div>
            <div>
                <h2 style={{color:"#513125"}} className="login-form"> Create Account</h2>
                <form >
             <input className="input-field" type="email" name="" id="" placeholder="Your Email"></input>
             <br />
           <input className="input-field" type="password" name="" id="" placeholder="Enter Password" ></input>
           <br />
           <input className="input-field" type="password" name="" id=""  placeholder="Re-enter Password"></input>
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