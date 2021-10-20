
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
  const { signInUsingGoogle } = useAuth();
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
    <div className="Login-form mx-auto w-50 border border-5 rounded-3">
      <div className="bg-secondary ">
        <h2 className="text-info " >Log in</h2>
        <form >
          <input type="email" name="" id="" placeholder="Your Email" />
          <br /><br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br /><br />
          <input className="fw-bold btn-primary" type="submit" value="Submit" />
        </form>
        <p className="fw-bold text-black text-opacity-50 ">Don't Have an Account? <Link to="/register" className="text-black text-opacity-50">Create Account</Link> </p>
        <br />
        <button onClick={handleGoogleLogIn} className="btn btn-primary text-opacity-50">Google Sign In</button>
      </div>
    </div>
  );
};

export default Login;