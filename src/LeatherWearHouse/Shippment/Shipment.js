import React from 'react';
import './shipment.css'
import shipment from '../../Images/shipment.jpg'

const Shipment = () => {
    return (
        <div  className='shipment'>
           <div >
           <img className='img' src={shipment} alt="" />
           </div>
           <div className='text'>
               <h2>
                   Shipment
               </h2>
               <p>
                   We Provide you fast delivery as your wish
               </p>
           </div>
        </div>
    );
};

export default Shipment;