import React, {useState, useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate, useSearchParams} from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions';



function HomeScreen() {
  const dispatch = useDispatch()
  const navigate =  useNavigate('')
  const [key, setKey] = useSearchParams();
  

  const productList = useSelector(state => state.productList)
  const {error, loading, products, page, pages,} = productList
 
  useEffect(()=>{
    dispatch(listProducts())
    
   
    
  },[dispatch])

  return (
    <div>
      <h1>Latest Books</h1>
      {loading ? <Loader />: error ? <Message variant='danger'>{error}</Message>:
      <div>
      <Row>
      {products.map((product)=>{
          return(<Col key={product._id} sm={12} md={6} lg={4} lx={3} >
          <Product product={product} />
          </Col>)
      })}
    </Row>
    
    </div>
      }
      
    </div>
  )
}

export default HomeScreen
