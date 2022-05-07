
import { useParams } from 'react-router-dom';
import useProductDetail from '../../useProductDetail';


const Inventory = () => {
    const {productId} = useParams();
    const [product] = useProductDetail(productId);
    return (
        <div>
            <h3>
                {product.name}
            </h3>
        </div>
    );
};

export default Inventory;