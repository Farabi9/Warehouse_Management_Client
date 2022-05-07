import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css'
const Header = () => {
    return (
        <>
            
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">
                        <div className='d-flex'>
                            <img  className='w-100 bg-danger mx-3' height='40px' alt="" />
                            <Nav.Link to='/' as={Link}>
                                <h4 className='text-white'>
                                    Leather House
                                </h4>
                            </Nav.Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                           
                            <Nav.Link to='/blog'>Blog</Nav.Link>
                        </Nav>
                        <Nav>
                    
                          <Nav.Link  to="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;