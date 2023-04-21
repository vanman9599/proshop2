import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'


function Product({product}) {
const gc = 'https://storage.googleapis.com/vanjordan-proshop-2023'
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
      <Link to={`/product/${product._id}`}>
        <Card.Title as="div">
            <strong>{product.name}</strong>
        </Card.Title>
      </Link>

      <Card.Text as="div">
        <div className="my-3">
            
            <Rating value={product.rating}  color={'#f8e825'} />
        </div>
      </Card.Text>
      
      <Card.Text as="h3"> ${product.price}</Card.Text>
      <Card.Text as="h5">🔥Plus, get my e-newsletter free</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
