import useProducts from '../../useProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products] = useProducts();
   

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