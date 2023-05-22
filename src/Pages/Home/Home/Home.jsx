import React from 'react';
import Bannar from '../Bannar/Bannar';
import Order from '../Order/Order';
import MenuItem from '../MenuItem/MenuItem';
import Feature from '../Feature/Feature';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Order></Order>
            <MenuItem></MenuItem>
            <Feature></Feature>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;