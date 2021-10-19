import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="Login-form mx-auto w-50 border border-5 rounded-3">
      <div className="bg-info">
        <h2 className="">Register Your Account</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input type="password" name="" id="" placeholder="Re-Enter-Password" />
          <br /><br />
          <input className="fw-bold btn-primary" type="submit" value="Submit" />

        </form>
        <p className="fw-bold">Already have an account? <Link to="/login">Login</Link> </p>
        <br />
        <button className="btn btn-warning">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;