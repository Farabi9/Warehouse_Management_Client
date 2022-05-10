import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import google from '../../../Images/download.png'
import Loading from '../Loading/Loading'


const ThirdPartyLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorFinding;
    if (error) {
        errorFinding = <>
            <p className='text-danger'>Error: {error?.message}</p>
        </>
    }
 
    if(loading ){
        return <Loading></Loading>
    }       

    if (user) {
        navigate('/home');

    }
    return (
        <div>
        <div className='d-flex align-items-center'>
            <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{ height: '1px' }} className='bg-dark w-50'></div>
        </div>
       {
           errorFinding
       }
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-warning w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>

           
           
        </div>
    </div>
    );
};

export default ThirdPartyLogin;