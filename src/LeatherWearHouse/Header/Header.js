import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
        <>
            
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">
                        <div className='d-flex'>
                            <img  className='w-100 bg-danger mx-3' height='40px' alt="" />
                            <Nav.Link to='/'>
                                <h4 className='text-white'>
                                    Leather House
                                </h4>
                            </Nav.Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link to='/inventory'>Inventory</Nav.Link>
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