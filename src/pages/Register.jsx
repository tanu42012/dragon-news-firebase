import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const {createUser,setUser,updateUser}=use(AuthContext);
  const [nameError,setNameError]=useState('')

  const handleRegister=(e)=>{
    e.preventDefault();
    console.log(e.target);
    const form=e.target;
    const name=form.name.value;
    
    const photo=form.photo.value;
    if(name.length<5){
      setNameError("name should be more than 5 character")
      return;
    }
    else{
      setNameError('');
    }
    const email=form.email.value;
    const password=form.password.value;
    console.log(name,photo,email,password);
    createUser(email,password)
    .then(result=>{
      const user=result.user;
      // console.log(user);
      updateUser({displayName:name, photoURL:photo}).then(()=>{
        setUser({...user, displayName:name, photoURL:photo});

      })
      .catch((error)=>{
        console.log(error);
        setUser(user);
      })
     
    })
    .catch((error)=>{
      // const errorCode=error.code;
      const errorMessage=error.message;
      alert(errorMessage);
    })


  }
    return (
        <div className='flex justify-center min-h-screen items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className='font-semibold text-2xl text-center'>Register your Account</h2>
    <form onSubmit={handleRegister} className="card-body">

      <fieldset className="fieldset">
        {/* name */}

      <label className="label">Name</label>
      <input 
      name='name'
      
      type="text"
      required
       className="input" 
       placeholder="Name" />
       {nameError && <p className='text-xs text-error'>{nameError}</p>}
      {/* photo-url */}

      <label className="label">Photo URL</label>
      <input type="text" 
      className="input"
      name='photo'
       placeholder="Photo URL" />
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
         className="input" placeholder="Password" />
        
       
        <button type='submit' className="btn btn-neutral mt-4">Register</button>
        <p className='text-semibold text-center pt-5'>Don't Have An Account? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
      </fieldset>
    </form >
  </div>
    </div>
    );
};

export default Register;