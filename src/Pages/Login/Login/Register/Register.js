import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
  const { signInUsingGoogle } = useAuth();
  const { handleRegister } = useAuth();
  const { isLogin } = useAuth();
  const { handleNameChange } = useAuth();
  const { emailChangeHandler } = useAuth();
  const { passwordChangeHandler } = useAuth();
  const { toggleLogIn } = useAuth();
  const { error } = useAuth();
  const { handleResetPassword } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || 'home'

  const handleGoogleLogIn = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri);
      })
  }

  return (
    <div className="mx-5">
      <form className="w-75 mx-auto" onSubmit={handleRegister}>
        <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
        {
          !isLogin && <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input onBlur={handleNameChange} type="name" className="form-control" placeholder="Enter Your Name" id="inputName" required />
            </div>
          </div>
        }
        <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={emailChangeHandler} type="email" className="form-control" placeholder="Enter Your Email" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input onBlur={passwordChangeHandler} type="password" className="form-control" placeholder="Enter Your Password" id="inputPassword3" required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1" />
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">{isLogin ? 'login' : 'Register'}</button>
        <button type="button" onClick={handleResetPassword} className="btn btn-danger ms-3">Reset Password</button>
        <br />
        <Link to='/login'><label className="form-check-label" htmlFor="gridCheck1">
          Already Have Register
        </label></Link>
      </form>
      <br />
      <Link to='/register'> <button onClick={handleGoogleLogIn} className="rounded btn-success">Google Sign In</button></Link>

    </div>
  );
};

export default Register;



// <div className="Login-form mx-auto w-75 border border-5 rounded-3">
// <div className="bg-secondary">
//   <h2 className="text-black text-opacity-50">Please Register </h2>
//   <form>

//     <input type="email" name="" id="" placeholder="Your Email" />
//     <br />
//     <input type="password" name="" id="" placeholder="Your Password" />
//     <br />
//     <input type="password" name="" id="" placeholder="Re-Enter-Password" />
//     <br /><br />
//     <input className="fw-bold btn btn-success" type="submit" value="Submit" />

//   </form>
//   <p className="fw-bold text-black text-opacity-50">Already have an account? <Link to="/login" className="text-black text-opacity-50">Login</Link> </p>
//   <button className="btn btn-success text-opacity-50">Google Sign In</button>
// </div>
// </div>