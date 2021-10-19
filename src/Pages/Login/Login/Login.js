import React from 'react';

import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {

  const { signInUsingGoogle } = useAuth();

  return (
    <div className="Login-form mx-auto w-50 border border-5 rounded-3">
      <div className="bg-info ">
        <h2>Log in</h2>
        <form >
          <input type="email" name="" id="" placeholder="Your Email" />
          <br /><br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br /><br />
          <input className="fw-bold btn-primary" type="submit" value="Submit" />
        </form>
        <p className="fw-bold">Don't Have an Account? <Link to="/register">Create Account</Link> </p>
        <br />
        <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
      </div>
    </div>
  );
};

export default Login;