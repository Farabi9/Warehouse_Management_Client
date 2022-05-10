import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <div className='slider'>
            <Carousel className='w-70 d-block mx-auto'>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100 "
      src="https://media-eng.dhakatribune.com/uploads/2018/02/IMGL7609.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src="https://thefinancialexpress.com.bd/uploads/1614319403.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1500}> 
    <img
      className="d-block w-50"
      src="https://img1.wsimg.com/isteam/ip/6ed29dc6-02b0-4016-a59b-539eedbb7831/ab8980c32ed24b822382cdb2d6448cf1.jpg/:/rs=h:1000,cg:true,m"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;