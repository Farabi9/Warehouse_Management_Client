import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {name, img, quantity, description,prize, suplierName, _id} = product;
    const navigate = useNavigate();
    const NavigateInventory = () =>{
        navigate(`/inventory/${_id}`)
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.img} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      {product.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
        <h2>
            Prize: ${product.prize}
        </h2>
    </ListGroupItem>
    <ListGroupItem >
        <h5>
            Quantity : {product.quantity}
        </h5>
    </ListGroupItem>
    <ListGroupItem>
        <h5>
            Suplier Name : {product.suplierName}
        </h5>
    </ListGroupItem>
  </ListGroup>
   <button onClick={NavigateInventory}>
       Update
   </button>
</Card>
        </div>
    );
};

export default Product;