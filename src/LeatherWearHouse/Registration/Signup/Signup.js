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
        <div className='register-form bg-success mx-5 p-5'>
        <h1 className='mt-3' style={{ textAlign: 'center' }}>
            SignUp
        </h1>
        <form onSubmit={handleSignup}>
            <input className='w-50' type="text" name='name' id='' placeholder='Your Name' />
            <br />
            <br />
            <input className='w-50' type="text" name='email' id='' placeholder='Email Address' required />
            <br />
            <br />
            <input className='w-50' type="password" name="password" id="" placeholder='Password' required />
            <br />
            <br />
            <input

                className='bg-warning text-white mt-2 w-10 d-block mx-auto' type="submit" value="Signup" />

        </form>
        <p>Already have an accout? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}> <button className='btn btn-primary'>Login</button> </Link></p>
        <ThirdPartyLogin></ThirdPartyLogin>

    </div>
    );
};

export default Signup;