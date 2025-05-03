import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaSquareGithub } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-6'>Login with</h2>
            <div className='space-y-4'>
                <button className='btn btn-outline btn-secondary  w-full'><FcGoogle size={24} />Login with Google</button>
                <button className='btn btn-outline btn-primary w-full'><FaSquareGithub size={24} />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;