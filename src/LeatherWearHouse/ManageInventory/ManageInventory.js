import { Link } from 'react-router-dom';
import useProducts from '../../useProducts';
import ManageInventoryProducts from '../ManageInventoryProducts/ManageInventoryProducts';

const ManageInventory = () => {
    const [products] = useProducts();
    
    return (
        <div>
           <h2>
               Manage Inventory : {products.length}
           </h2>
           {
               products.map(manageInventoryProducts => <ManageInventoryProducts
               key={manageInventoryProducts._id}
                manageInventoryProducts={manageInventoryProducts}
               ></ManageInventoryProducts>)
           }
           <div>
               <button >
                  <Link to='/addProduct'> Add New Leather Products</Link>
               </button>
           </div>
          
        </div>
    );
};

export default ManageInventory;