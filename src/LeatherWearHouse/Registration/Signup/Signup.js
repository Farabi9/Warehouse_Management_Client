import React from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import ThirdPartyLogin from '../ThirdPartyLogin/ThirdPartyLogin';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading'


const Signup = () => {
    
    const [
        createUserWithEmailAndPassword,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }



    const handleSignup = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')
    }

    return (
        <div className='register-form'>
        <h2 style={{ textAlign: 'center' }}>
            Please register
        </h2>
        <form onSubmit={handleSignup}>
            <input type="text" name='name' id='' placeholder='Your Name' />
            <br />
            <input type="text" name='email' id='' placeholder='Email Address' required />
            <br />
            <input type="password" name="password" id="" placeholder='Password' required />
            <br />
            <input

                className='bg-dark text-white mt-2 w-50 d-block mx-auto' type="submit" value="Signup" />

        </form>
        <p>Already have an accout? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        <ThirdPartyLogin></ThirdPartyLogin>

    </div>
    );
};

export default Signup;