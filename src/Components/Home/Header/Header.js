import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Topbar/Topbar';
import './Header.css'

const Header = () => {
    return (
        <section className='banner'>
        <div className="container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>

        </div>

        </section>

    );
};

export default Header;