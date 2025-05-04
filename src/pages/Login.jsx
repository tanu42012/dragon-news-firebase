import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const [error,setError]=useState("")
  const { signIn}=use(AuthContext);
  const location =useLocation();
  const navigate =useNavigate();
  console.log(location);
  const handleLogin=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      navigate(`${location.state? location.state :"/"}`)

    })
    .catch((error)=>{
      const errorCode=error.code;
      // const errorMessage=error.message;
      // alert(errorCode,errorMessage);
      setError(errorCode);
    })

    

  }
    return (
      <div className='flex justify-center min-h-screen items-center'>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='font-semibold text-2xl text-center'>Login your Account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input type="email"
          name='email'
          required
           className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password"
          name='password'
          required
           className="input"
            placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          {
            error && <p className='text-red-600'>{error}</p>
          }
         
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-semibold text-center pt-5'>Don't Have An Account? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
        </fieldset>
      </form>
    </div>
      </div>
    );
};

export default Login;