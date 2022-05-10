import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
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
                           
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                            {
                                user ?
                                <Nav.Link as={Link} to='/manageInventory'>Manage Inventory</Nav.Link> :
                                <Nav.Link onClick={handleSignOut} className='btn btn-dark text-dark'>
                              SignOut
                          </Nav.Link> 
                            }
                           
                        
                        </Nav>
                        <Nav>
                          { 
                          user
                          ?
                         
                          <button onClick={handleSignOut} className='btn btn-dark'>
                              SignOut
                          </button> 
                           
                          :
                          <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;