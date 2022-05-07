import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='items'>
          <h2>
              Items
          </h2>
          {
              products.map(product => <Product
              key={product._id}
              product={product}
              ></Product>)
          }
        </div>
    );
};

export default Products;