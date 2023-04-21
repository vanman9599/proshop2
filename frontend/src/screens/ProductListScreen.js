import React, {useState, useEffect} from 'react'  
import { useNavigate} from 'react-router-dom' 
import {Table, Button, Row, Col} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import Loader from '../components/Loader'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'



import {listProducts, deleteProduct, createProductAction} from '../actions/productActions'
import {PRODUCT_CREATE_RESET} from '../constants/productConstants'

function ProductListScreen() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const productList = useSelector(state => state.productList)
    const {loading,error, products} = productList

  
    const productDelete = useSelector(state => state.productDelete)
    const {loading: loadingDelete,error:errorDelete, success:successDelete} = productDelete

    const productCreate = useSelector(state => state.productCreate)
    const {loading: loadingCreate,error:errorCreate, success:successCreate, product: createProduct} = productCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    

    useEffect(()=>{
        dispatch({type:PRODUCT_CREATE_RESET})
        if(!userInfo.isAdmin){
            navigate('/login')
        }

        if(successCreate){
            navigate(`/admin/product/${createProduct._id}/edit`)
        }else{
            dispatch(listProducts())
        }
       
    },[dispatch, navigate,successDelete, userInfo, createProduct, successCreate])
    
    const deleteHandler=(id)=>{
        if(window.confirm('Are you sure you want to delete this prouduct?')){
            dispatch(deleteProduct(id))
        }
      
    }

    const createProductHandler =()=>{
        dispatch(createProductAction())
    }
  return (
    <div>
     <Row className="align-items-center">
        <Col>
        <h1>Products</h1>
        </Col>
        <Col className="text-right">
            <Button className="my-3" onClick={createProductHandler}><i className="fas fa-plus"></i>Create Product</Button>
        </Col>
     </Row>
     {loadingDelete && <Loader />}
     {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

     {loadingCreate && <Loader />}
     {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

      {loading 
      ? <Loader />
      : error 
      ? <Message variant='danger'>{error}</Message>
     : (
        <Table striped bordered hover responsive className="table-sm">
            <thead>
                <tr>

                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th></th>
                </tr>
               
                
            </thead>
            <tbody>
                {products.map(p => (
                    <tr key={p._id}>
                        <td>{p._id}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>{p.category}</td>
                        <td>{p.brand}</td>
                        

                            
                            <td>
                                <LinkContainer to={`/admin/product/${p._id}/edit`}>
                                    <Button variant="light" className="btn-sm">
                                    <i className="fas fa-edit" ></i>
                                    </Button>

                                    
                                </LinkContainer>
                                <Button variant="danger" onClick={()=> deleteHandler(p._id)} className="btn-sm">
                                    <i className="fas fa-trash" ></i>
                                    </Button>
                            </td>
                    </tr>
                ))}
            </tbody>
        </Table>
     )}
    </div>
  )
}

export default ProductListScreen
