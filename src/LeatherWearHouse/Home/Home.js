import React from 'react';
import Products from '../Products/Products';
import Shipment from '../Shippment/Shipment';
import Slider from '../Slider/Slider'


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Products></Products>
            <Shipment></Shipment>
        </div>
    );
};

export default Home;