import React from 'react';

const ManageInventoryProducts = ({manageInventoryProducts}) => {
    const {name, img, quantity, description,prize, suplierName, _id} = manageInventoryProducts;
    return (
        <div>
            <h2>
                {manageInventoryProducts.name}
            </h2>
        </div>
    );
};

export default ManageInventoryProducts;