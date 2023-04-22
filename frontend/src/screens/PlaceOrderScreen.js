import React, {useEffect} from 'react'  
import {Link,  useNavigate} from 'react-router-dom' 
import { Button, Row, Col, ListGroup, Image, ListGroupItem} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import Message from '../components/Message'
import {createOrder} from '../actions/orderActions'
import {ORDER_CREATE_RESET} from '../constants/orderConstants'

function PlaceOrderScreen() {
    const orderCreate = useSelector(state => state.orderCreate)
    const {order, error, success} = orderCreate
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart)
    const userInfo = useSelector(state => state.userInfo)
    cart.itemsPrice = cart.cartItems.reduce((acc,item)=> acc + item.price *item.qty, 0).toFixed(2)
    cart.shippingPrice = 0.00
    cart.tagPrice = ((.0685) * cart.itemsPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.tagPrice)).toFixed(2)
       
        if(!cart.paymentMethod){
            navigate('/payment')
        }
    useEffect(()=>{
       
        if(success){
            navigate(`/order/${order._id}`)
            dispatch({type: ORDER_CREATE_RESET})
        }
    }, [success, navigate, dispatch])


    const placeOrder =()=>{
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            tagPrice: cart.tagPrice,
            totalPrice: cart.totalPrice,
        }))
    }

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8} >
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h2>Shipping</h2>
                    <p><strong>Shipping: </strong></p>
                    {cart.shippingAddress.address}: {cart.shippingAddress.city}
                    {'  '}  {cart.shippingAddress.postcalCode},
                    {'  '}  {cart.shippingAddress.country}, 
                </ListGroupItem>

                <ListGroupItem>
                    <h2>Payment Method</h2>
                    <p><strong>Method: </strong></p>
                    {cart.paymentMethod}
                </ListGroupItem>

                <ListGroupItem>
                    <h2>Order Items</h2>
                    <p><strong>Method: </strong></p>
                    {cart.cartItems.length ===0? <Message variant='info'>You cart is empty</Message>:(
                        <ListGroup variant='flush'>
                            {cart.cartItems.map((item, index)=>(
                                <ListGroup.Item key={index} >
                                    <Row>
                                        <Col md={1}>
                                            <Image src={item.image} alt={item.name} fluid rounded/>
                                        </Col>
                                        <Col>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={4}>
                                            {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </ListGroupItem>
            </ListGroup>
        </Col>
        <Col md={4}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>Order Summary</h2>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Item:</Col>
                            <Col>${cart.itemsPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Shipping:</Col>
                            <Col>${cart.shippingPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Tax:</Col>
                            <Col>${cart.tagPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Total:</Col>
                            <Col>${cart.totalPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                       {error && <Message variant='danger'>{error}</Message>}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Button type="button" className="btn-block" disabled={cart.cartItems===0} onClick={placeOrder}>Place Order</Button>
                    </ListGroup.Item>
                </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default PlaceOrderScreen

