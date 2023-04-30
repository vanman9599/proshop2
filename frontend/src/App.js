import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import {HashRouter as Router, Route,Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import AboutScreen from './screens/AboutScreen'
import ShippingScreen from './screens/ShippingScreen'
import BlogScreen from './screens/BlogScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
      <Container>
        <Routes>
          <Route  path="/" element={<BlogScreen />} exact />
          <Route  path="/login" element={<LoginScreen />}  />
          <Route  path="/register" element={<RegisterScreen />}  />
          <Route  path="/store" element={<HomeScreen />} />
          <Route  path="/product/:id" element={<ProductScreen />} />
          <Route  path="/cart/:id?" element={<CartScreen />} />
          <Route  path="/about" element={<AboutScreen />} />
          <Route  path="/blog" element={<BlogScreen />} />
          <Route  path="/profile" element={<ProfileScreen />}  />
          <Route  path="/shipping" element={<ShippingScreen />}  />  
          <Route  path="/payment" element={<PaymentScreen />}  />
          <Route  path="/order/:id" element={<OrderScreen />} />
          <Route  path="/placeorder" element={<PlaceOrderScreen />} />
          <Route  path="/admin/userlist" element={<UserListScreen />} />
          <Route  path="/admin/user/:id/edit" element={<UserEditScreen />} />
          <Route  path="/admin/productlist" element={<ProductListScreen />} />
          <Route  path="/admin/product/:id/edit" element={<ProductEditScreen />} />
          <Route  path="/admin/orderlist" element={<OrderListScreen />} />
          <Route path="*" element={<NotFound/>} />
          
        </Routes>
         
        
      </Container>

      </main>
      
     <Footer />
    </Router>
  );
}

export default App;
