import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast as alert } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


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


  let from = location.state?.from?.pathname || "/";
  let errorElement;
  if (error) {

    errorElement = <>
      <p className='text-danger'>Error: {error?.message}</p>
    </>

  }


  const handleSubmit = async event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

//     await signInWithEmailAndPassword(email, password);
//     const {data} = await axios.post('https://damp-everglades-29980.herokuapp.com/login', {email});
//     localStorage.setItem('accessToken', data.accessToken);
  }
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  if (user) {
    navigate(from, { replace: true });
  }

  const navigateRegister = () => {
    navigate('/register');
  }

  if (loading) {
    return <Loading></Loading>
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;


    if (email) {
      await sendPasswordResetEmail(email);
      alert('Sent email');

    }
    else {
      alert(' please entered your email')
    }
  }
  return (
    <div className='container w-50 mx-auto'>
      <h2 className='text-primary text-center mt-4'>Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement?.message}
      <p>New to Genius Car? <Link to='/register' className='text-danger text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
      <p>Forget password? <button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
      {/* <SocialLogin></SocialLogin> */}

    </div>
  );
};

export default Login;