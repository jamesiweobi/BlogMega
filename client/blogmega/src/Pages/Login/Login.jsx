import './Login.css';
import { Link } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { Context } from '../../Context/Context';
import axios from 'axios';

export default function Login() {
    const [error, setError] = useState('');
    const usernameRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const handleSubmit = async (e) => {
        setError('');
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            const { data } = await axios.post('/api/v1/auth/login', {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: 'LOGIN_SUCCESS', payload: data.user });
            window.location.replace('/');
        } catch (err) {
            setError(err.response.data.message);
            dispatch({ type: 'LOGIN_FAILURE' });
        }
    };
    return (
        <div className='login'>
            <span className='loginTitle'>Login</span>
            {error && <span className='errorMessage'>{error}</span>}
            <form action='' className='loginForm' onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type='text'
                    className='loginInput'
                    placeholder='Enter your username...'
                    autoFocus={true}
                    ref={usernameRef}
                />
                <label>Password</label>
                <input type='password' placeholder='Enter your password' className='loginInput' ref={passwordRef} />
                <button className='login-Button' type='submit' disabled={isFetching}>
                    Login
                </button>
            </form>
            <button className='registarButton'>
                <Link className='link' to='/register'>
                    Register
                </Link>
            </button>
        </div>
    );
}
