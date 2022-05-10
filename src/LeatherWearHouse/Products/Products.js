import useProducts from '../../useProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products] = useProducts();
   

    return (
        <div >
          <h2 className='text-item'>
              Items
          </h2>
         <div className='items'>
         {
              products.map(product => <Product
              key={product._id}
              product={product}
              ></Product>)
          }
         </div>
         
        </div>
    );
};

export default Products;