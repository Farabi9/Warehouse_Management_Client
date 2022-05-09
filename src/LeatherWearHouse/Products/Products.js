import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../useProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useProducts();
   

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
          <Link to='manageInventory'>ManageInventory</Link>
        </div>
    );
};

export default Products;