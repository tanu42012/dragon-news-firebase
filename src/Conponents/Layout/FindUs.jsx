import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-6'>Find Us On</h2>
            <div>
            <div className="join join-vertical w-full">
  <button className="btn bg-base-100 join-item justify-start">
   <FaFacebook></FaFacebook> Facebook</button>
  <button className="btn  bg-base-100 justify-start join-item  "><FaTwitter></FaTwitter> Twitter</button>
  <button className="btn  bg-base-100 join-item justify-start "><FaInstagram></FaInstagram> Instagram</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;