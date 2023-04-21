import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {logout} from '../actions/userActions'


function Header() {
  const dispatch = useDispatch()
  const userLogin =  useSelector(state => state.userLogin)
  const {userInfo} = userLogin

const logoutHandler = () => {
  dispatch(logout())
}

  return (
    <header>
  <Navbar bg="dark" variant="dark"  collapseOnSelect expand="lg">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand ><span className="brand">Van Jordan</span></Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ml-auto">
          <LinkContainer to="/store"><Nav.Link>Shop</Nav.Link></LinkContainer>

            <LinkContainer to="/blog">
            <Nav.Link> Blog </Nav.Link></LinkContainer>

            <LinkContainer to="/about">
            <Nav.Link>Hire me</Nav.Link></LinkContainer>
            
             <LinkContainer to="/cart"><Nav.Link><i className="fas fa-shopping-cart"></i>  Cart</Nav.Link></LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
            <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link></LinkContainer>
            )}
            
            {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenue'>
                <LinkContainer to="admin/userlist">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="admin/productlist">
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="admin/orderlist">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            )}
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  
  );
}

export default Header;
