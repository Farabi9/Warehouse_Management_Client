

import { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../useProductDetail';



const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
 
  
  useEffect(() =>{
      fetch(`https://stark-escarpment-05215.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  },[])
 

      const updateQuantity = event =>{
        
          event.preventDefault();
          const quantity = product.quantity;
          const newQuantity = parseInt(quantity) -1;
  
          const updatedQuantity = { newQuantity };
          
          const url = `https://stark-escarpment-05215.herokuapp.com/products/${id}`
          fetch(url, {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(updatedQuantity)
          })
          .then(res => res.json())
          .then( data =>{
              console.log('success', data)
              alert('user updated successfully')
              
          })
    
     }



  return (
    <div className='w-50 mx-auto'>
      <Card style={{ width: '40rem' }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price:{product.prize}</ListGroupItem>
          <ListGroupItem>Quantity:{product.quantity}</ListGroupItem>
          <ListGroupItem>Suplier Name:{product.suplierName}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <button className='btn btn-danger' onClick={updateQuantity}>
            Delivered
          </button>
      <br />    <br />
          <div>
            <input type="number" />

     <br />            
            <button className='btn btn-warning'>
              Re-stock   </button>
          </div>

        </Card.Body>
      </Card>
     
    </div>
  );
};

export default Inventory;