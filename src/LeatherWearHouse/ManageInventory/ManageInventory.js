import { Link } from 'react-router-dom';
import './ManageInventory.css'
import useProducts from '../../useProducts';
import ManageInventoryProducts from '../ManageInventoryProducts/ManageInventoryProducts';

const ManageInventory = () => {
    const [products] = useProducts();
  
    
    return (
        <div >
           <h2 className='mt-3 mb-5 text-danger'>
               Manage Inventory 
           </h2>
          <div className='inventory'>
          {
               products.map(manageInventoryProducts => <ManageInventoryProducts
               key={manageInventoryProducts._id}
                manageInventoryProducts={manageInventoryProducts}>
                 
                </ManageInventoryProducts>)
           }
          </div>
           
          
          
          
           <div>
               <button className='addProduct'>
                  <Link className='add' to='/addProduct'> Add New Leather Products</Link>
               </button>
           </div>
          
        </div>
    );
};

export default ManageInventory;