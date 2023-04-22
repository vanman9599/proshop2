import React, {useState, useEffect} from 'react'  
import ReactDOM from 'react-dom'
import {Link, useLocation, useParams, useNavigate, Navigate} from 'react-router-dom' 
import {Form, Button, Row, Col, ListGroup, Image, Card, ListGroupItem} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {PayPalButton} from 'react-paypal-button-v2'
import {ORDER_PAY_RESET, ORDER_DELIVER_RESET} from '../constants/orderConstants'


import Message from '../components/Message'
import {getOrderDetails, payOrder, deliverOrder} from '../actions/orderActions'
import Loader from '../components/Loader'

function OrderScreen() {
    const params = useParams()
    const orderId = params.id
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const orderDetails = useSelector(state => state.orderDetails)
    const {order, error, loading} = orderDetails

    const orderPay = useSelector(state => state.orderPay)
    const {loading:loadingPay, success:successPay} = orderPay

    const orderDeliver = useSelector(state => state.orderDeliver)
    const {loading:loadingDeliver, success:successDeliver} = orderDeliver

    
    
    const dispatch = useDispatch()
    const navigate = useNavigate();
   const [sdkReady, setSdkReady] = useState(false)
    if(!loading && !error){
        order.itemsPrice = order.orderItems.reduce((acc,item)=> acc + item.price *item.qty, 0).toFixed(2)
    }
    
   // clientID AXuKnhlrSo6_vFqMFq5exxDmgbgguubVmrOkP7Zu8bhB0AhAgNfbFvYbZj4gZYtMy3LbX890BYpTb-Hb

   const clientId = 'Aa2npL28p5H071BSkkqPgVfN4gnuYY0q8yMkt93vhxPm0wtdg2aMg13mwsq2udu9JbJkl1y01leQ8xd9'
   const options = {clientId: clientId, currency: "USD", intent: "capture"}
const addPayPalScript = ()=>{
    
    const script = document.createElement('script')
    
    script.type = 'text/javascript'
    script.src = 'https://www.paypal.com/sdk/js'
    script.async = true
    script.onload = () =>{
        setSdkReady(true)
    }
    document.body.appendChild(script)
}

       
    useEffect(()=>{
        if(!userInfo){
            navigate('/login')
        }
        if(!order || successPay || order._id !== Number(orderId) || successDeliver){
            dispatch({type: ORDER_PAY_RESET})
            dispatch({type: ORDER_DELIVER_RESET})
            dispatch(getOrderDetails(orderId))
        }
        else if(!order.isPaid){
            if(!window.paypal){
                addPayPalScript();
            }else{
                setSdkReady(true)
            }
        }
    }, [order,dispatch, orderId, successPay, successDeliver])


    const successPaymentHandler = (paymentResult)=>{
        dispatch(payOrder(orderId, paymentResult))
    }
    const deliverHandler = ()=>{
        dispatch(deliverOrder(order))
    }


    
  return loading ? (<Loader /> ) : error ? (<Message variant="danger">{error}</Message>) :
  (

  
    <div>
        <h1>Order Number: 00{order._id}</h1>
      <Row>
        <Col md={8} >
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h2>Shipping</h2>
                    <p><strong>Name: </strong>{order.user.name}</p>
                    <p><strong>Email: </strong><a href={`mailto:${order.user.email}`} >{order.user.email}</a></p>
                    <p><strong>Shipping: </strong></p>
                    <p>{order.shippingAddress.address}: {order.shippingAddress.city}
                    {'  '}  {order.shippingAddress.postcalCode},
                    {'  '}  {order.shippingAddress.country},</p>
                    {order.isDelivered? (<Message variant='success'>Delivered on  {order.deliveredAt}</Message>): (
                    <Message variant='warning'> Not Delivered</Message>
                   )} 
                </ListGroupItem>

                <ListGroupItem>
                    <h2>Payment Method</h2>
                    <p><strong>Method: </strong>{order.paymentMethod}</p>
                   {order.isPaid ? (<Message variant='success'>Paid on  {order.paidAt}</Message>): (
                    <Message variant='warning'> Not Paid</Message>
                   )} 
                </ListGroupItem>

                <ListGroupItem>
                    <h2>Order Items</h2>
                    <p><strong>Method: </strong></p>
                    {order.orderItems.length ===0? <Message variant='info'>Order is empty</Message>:(
                        <ListGroup variant='flush'>
                            {order.orderItems.map((item, index)=>(
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
                        <h2>Items</h2>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Item:</Col>
                            <Col>${order.itemsPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Shipping:</Col>
                            <Col>${order.shippingPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Tax:</Col>
                            <Col>${order.tagPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Total:</Col>
                            <Col>${order.totalPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                    
                    {!order.isPaid && (
                           <ListGroup.Item>
                           {!sdkReady && <Loader />}

                           {sdkReady ? <Loader /> : (

                             <PayPalButton
                                    amount={order.totalPrice}
                                    onSuccess={successPaymentHandler}
                                    options={options}
                              />
                           )}
                               
                         
                          
                       </ListGroup.Item>
                    )}
                        
                </ListGroup>
                
                {userInfo && userInfo.isAdmin & order.isPaid && !order.isDelivered && (
                    <ListGroup.Item>
                        <Button type='button' className='btn btn-block' onClick={deliverHandler}>
                            Mark As Delivered
                        </Button>
                    </ListGroup.Item>
                )}
        </Col>
      </Row>
    </div>
  )
}

export default OrderScreen

