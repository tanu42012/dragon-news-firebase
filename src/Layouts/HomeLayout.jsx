import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Conponents/Header';
import LatestNews from '../Conponents/LatestNews';
import Navbar from '../Conponents/Navbar';
import LeftAside from '../Conponents/Layout/LeftAside';
import RightAside from '../Conponents/Layout/RightAside';

const HomeLayout = () => (
    <div>
        <header>
            <Header></Header>
            <section className='w-11/12 mx-auto my-4'>
                <LatestNews />
            </section>
            <nav className='w-11/12 mx-auto my-4'>
                <Navbar></Navbar>
            </nav>
        </header>
        <main className='w-11/12 mx-auto my-4  grid grid-cols-12 gap-6'>
           <aside className='col-span-3 sticky top-2 h-fit'>
            <LeftAside></LeftAside>
           </aside>
          

            {/* <section className='left_nav'></section> */}
            <section className='main col-span-6'>
                <Outlet></Outlet>
            </section>
            <aside className='col-span-3 sticky top-2 h-fit'>
           <RightAside></RightAside>
           </aside>
            {/* <section className='right_nav'></section> */}
        </main>
    </div>
);

export default HomeLayout;