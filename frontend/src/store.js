import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' 
import { composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer, productCreateReducer, productUpdateReducer, productDeleteReducer, productDetailsReducer} from './reducers/productReducers'
import  { cartReducer } from './reducers/cartReducers'
import  { orderCreateReducer,orderDeliveredReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer, orderListReducer } from './reducers/orderReducers'
import  { userDeleteReducer, userLoginReducer,userUpdateReducer, userRegisterReducer, userDetailsReducer, updateProfileReducer, userListReducer } from './reducers/userReducers'
import { blogListReducer } from './reducers/blogReducer'
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    cart: cartReducer,
    userLogin: userLoginReducer, 
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer, 
    userUpdateProfile: updateProfileReducer,
    usersList: userListReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    listBlogs: blogListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer, 
    orderDeliver: orderDeliveredReducer
    

    
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    cart: { cartItems: cartItemsFromStorage,shippingAddress: shippingAddressFromStorage},
    userLogin: {userInfo: userInfoFromStorage}

}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;