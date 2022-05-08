
import { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../useProductDetail';
import useProducts from '../../useProducts';


const Inventory = () => {
    const {id} = useParams();
    const [product] = useProductDetail(id);
    const [products, setProducts] = useProducts()

    const handleDeliver = () =>{
        const deliver = window.confirm("Confirm Delivery?")
        if(deliver){
            fetch(`http://localhost:5000/products/${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const quantity = products.quantity;
                const newQuantity = quantity -1;
                setProducts(newQuantity)
            })

        }
    
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
    <ListGroupItem>{product.prize}</ListGroupItem>
    <ListGroupItem>{product.quantity}</ListGroupItem>
    <ListGroupItem>{product.suplierName}</ListGroupItem>
  </ListGroup>
  <Card.Body>
   <button onClick={handleDeliver}>
       Delivered
   </button>
   <button>
      <input type="number" /> Stock
   </button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Inventory;