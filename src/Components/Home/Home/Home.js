import React from 'react';
import Clients from '../Clients/Clients';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Clients></Clients>
            <Services></Services>
            <Portfolio></Portfolio>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;