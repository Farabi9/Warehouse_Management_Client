import React, { useRef } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading'
import ThirdPartyLogin from '../ThirdPartyLogin/ThirdPartyLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    
  
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
  
  
    const from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error) {
  
      errorElement = <>
        <p className='text-danger'>Error: {error?.message}</p>
      </>
  
    }
  
  
    const handleSubmit = event => {
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
  
      signInWithEmailAndPassword(email, password);
    }
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    if (user) {
      navigate(from, { replace: true });
    }
  
    const navigateSignUp = () => {
      navigate('/register');
    }
  
    if (loading) {
      return <Loading></Loading>
    }
  
    
    return (
        <div className='container w-50 mx-auto'>
        <h2 className='text-dark text-center mt-4'>Please Login</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            {errorElement}
                <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
                Login
            </Button>
        </Form>
        
   
        <p>New here? <Link to='/signup' className='text-danger text-decoration-none' onClick={navigateSignUp}>Please Signup</Link></p>
       
        <ThirdPartyLogin></ThirdPartyLogin>
        </div>
        
    );
};

export default Login;