import React from 'react';
import { useRef } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Register.css';

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();


  const { signInUsingGoogle, setUser, signUpWithEmail } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";


  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInUsingGoogle()
      .then(res => {
        setUser(res.user)
        history.push(url)
      })
      .catch((err) => console.log(err));
  }

  //handle registration
  const handleRegistration = (e) => {
    e.preventDefault();
    // const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const user = { displayName: name, email: email, password: password };
    signUpWithEmail(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });

  }

  return (
    <div className='register-form'>
      <div className='form-signin'>
        <form>
          <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign up here</h1>

          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" />
            <label for="floatingInput">Full Name</label>
          </div>
          <div className="form-floating">
            <input ref={emailRef} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input ref={passwordRef} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button onClick={handleRegistration} className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>

          <p>Already have an account? <Link to='/login'>login</Link></p>
          <p className="text-center mt-5 mb-3 text-muted">&copy; 2020–2021</p>
          <p className='text-center'>----------Or-----------</p>
          <button onClick={handleGoogleSignIn} className="w-100 btn btn-lg btn-primary" type="submit">Sign in With Google</button>
        </form>
      </div>
    </div>
  );
};

export default Register;