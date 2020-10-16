import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
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