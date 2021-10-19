import React from 'react';
import initializationApp from '../../Login/Login/Firebase/Firebase.init';
import Banner from '../../Shared/Header/Banner/Banner';

import NavBar from '../../Shared/Header/NavBar';
import Services from '../Services/Services';

const Home = () => {
   
    return (
        <div>
           
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;