import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut}=use(AuthContext);
  
    const handleLogout=()=>{
        console.log('user trying to logout');
        logOut().then(()=>{
            alert('logged out successfully')
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className='flex justify-between items-center text-accent'>
           <div className=''>{user && user.email}</div>
           <div className='nav flex gap-6'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
           </div>
           <div className='login-btn flex gap-4'>

            <img src={userIcon} alt="" />
            {
                user? <button onClick={handleLogout} className='btn btn-primary px-12'>Logout</button>: <Link to='/auth/login' className='btn btn-primary px-12'>Login</Link>
            }
            
           </div>
        </div>
    );
};

export default Navbar;