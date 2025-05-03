import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-4'>
            <p className='text-base-100 bg-secondary px-2 py-2'>Latest</p>
            <Marquee className='flex gap-6' pauseOnHover={true} speed={60}>
            <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi sequi voluptates.
            </p> <br />
            <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi sequi voluptates.
            </p> <br />
            <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi sequi voluptates.
            </p>
            </Marquee>
           
        </div>
    );
};

export default LatestNews;