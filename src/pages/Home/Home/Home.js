import React from 'react';
import Banner from '../../Shared/Header/Banner/Banner';

import NavBar from '../../Shared/Header/NavBar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;