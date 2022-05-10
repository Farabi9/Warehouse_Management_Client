import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import useProducts from '../../useProducts';

const ManageInventoryProducts = ({manageInventoryProducts}) => {
    const {name, img, quantity, description,prize, suplierName, _id} = manageInventoryProducts;
    const [products, setProducts] = useState();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then( data =>{
                console.log(data);
                const remaining = products?.filter(manageInventoryProducts => manageInventoryProducts._id !== id)
                setProducts(remaining);
            })
        }
    }
   
    return (
        <div>
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={manageInventoryProducts.img} />
                <Card.Body>
                    <Card.Title>{manageInventoryProducts.name}</Card.Title>
                    <Card.Text>
                        {manageInventoryProducts.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup >
                    <ListGroupItem>

                        Price: {manageInventoryProducts.prize}

                    </ListGroupItem>
                    <ListGroupItem >
                        <h5>
                            Quantity : {manageInventoryProducts.quantity}
                        </h5>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h5>
                            Suplier Name : {manageInventoryProducts.suplierName}
                        </h5>
                    </ListGroupItem>
                </ListGroup>
                
              <button onClick={() => handleDelete(manageInventoryProducts._id)}>
                  Delete
              </button>
            </Card>
        </div>
    );
};

export default ManageInventoryProducts;