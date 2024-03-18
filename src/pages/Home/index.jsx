import React from 'react';

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';

//import "antd/dist/antd.css";
import Header from './../../composants/Header/index';
import Hero from './Hero';

const Home = () => {
    return (
        <div className='MainDiv'>
            <Hero />
            <Header />
        </div>
    )
}

export default Home

