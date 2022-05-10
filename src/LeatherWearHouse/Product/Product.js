import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { img, description, suplierName, _id } = product;
    const prize = parseInt(product.prize);
    const quantity = parseInt(product.quantity);
  


    const navigate = useNavigate();
    const NavigateInventory = () => {
        navigate(`/inventory/${_id}`)
    }
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup >
                    <ListGroupItem>

                        Price: {prize}

                    </ListGroupItem>
                    <ListGroupItem >
                        <h5>
                            Quantity : {quantity}
                        </h5>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h5>
                            Suplier Name : {product.suplierName}
                        </h5>
                    </ListGroupItem>
                </ListGroup>
                <button onClick={() => NavigateInventory(_id)}>
                    Update
                </button>
            </Card>

        </>

    );
};

export default Product;