import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';
import {useHistory, useLocation} from 'react-router-dom';

const Login = () => {
  const {signInUsingGoogle, setUser} = useAuth();
  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";


const handleGoogleSignIn = () =>{
  signInUsingGoogle()
  .then(res=>{
    setUser(res.user)
    history.push(url)
  })
  .catch((err)=>console.log(err));
}


  return (
    <div className='container w-75 mb-4 login-form'>
      {/* <form>
        <h3>Log in</h3>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
        <p className="forgot-password text-right">
          Forgot <Link to=''>password</Link>
        </p>

        <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      </form> */}
      <button onClick={handleGoogleSignIn}>Sign In With Google</button>
    </div>
  );
};

export default Login;