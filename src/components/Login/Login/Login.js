import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useRef } from 'react';

const Login = () => {
  const { signInUsingGoogle, setUser, signInWithEmail } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const emailRef= useRef();
  const passRef = useRef();


  //email, pass for verification
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  
  // setEmail(emailRef.current.value)
  // console.log(emailRef.current.value)
//-----------------
  const url = location.state?.from || "/home";


  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInUsingGoogle()
      .then(res => {
        // console.log(res.user);
        setUser(res.user)
        history.push(url)
      })
      .catch((err) => console.log(err));
  }

  //login 
  const handleLogin =(e)=>{
    e.preventDefault();
    const email= emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmail(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setUser(user)
      history.push(url)
    })
    .catch((error) => {
      console.log(error.message);
    });
  }


  return (
    <div className='container w-75 mb-4 login-form'>
      <div className="form-signin">
        <form>
          <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
          <input ref={emailRef} type ="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
          <input ref={passRef} type ="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
          <label>
          <input type ="checkbox" value="remember-me"/> Remember me
          </label>
          </div>
          <button onClick={handleLogin} className="w-100 btn btn-lg btn-primary" type ="submit">Sign in</button>
          <Link to='/register'>Create a new account</Link>
          <p className="mt-5 mb-3 text-muted">&copy; 2020–2021</p>
          <p className='text-center'>----------Or-----------</p>
          <button onClick={handleGoogleSignIn} className="w-100 btn btn-lg btn-primary" type ="submit">Sign in With Google</button>
        </form>
      </div>
    </div>
  );
};

export default Login;