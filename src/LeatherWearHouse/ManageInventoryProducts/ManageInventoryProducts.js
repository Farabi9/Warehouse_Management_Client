import React from 'react';

const ManageInventoryProducts = ({manageInventoryProducts}) => {
    const {name, img, quantity, description,prize, suplierName, _id} = manageInventoryProducts;
    return (
        <div>
            <h2>
                {manageInventoryProducts.name}
            </h2>
            <h5>
                {
                    manageInventoryProducts.prize
                }
            </h5>
        </div>
    );
};

export default ManageInventoryProducts;