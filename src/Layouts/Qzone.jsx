import React from 'react';
import swimmingImage from "../assets/swimming.png";
import classImage from "../assets/playground.png";
import playImage from "../assets/class.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-4 '>
            <h2 className='font-bold mb-6'> Qzone</h2>
            <div className='space-y-5'>
                <img src={swimmingImage}alt="" />
                <img src={playImage}alt="" />
                <img src={classImage}alt="" />

            </div>
           
        </div>
    );
};

export default Qzone;