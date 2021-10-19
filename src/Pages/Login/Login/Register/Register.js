import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="Login-form mx-auto w-50 border border-5 rounded-3">
      <div className="bg-secondary">
        <h2 className="text-info">Register Your Account</h2>
        <form>

          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input type="password" name="" id="" placeholder="Re-Enter-Password" />
          <br /><br />
          <input className="fw-bold btn-primary" type="submit" value="Submit" />

        </form>
        <p className="fw-bold text-black text-opacity-50">Already have an account? <Link to="/login" className="text-black text-opacity-50">Login</Link> </p>
        <br />
        <button className="btn btn-primary  text-opacity-50">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;