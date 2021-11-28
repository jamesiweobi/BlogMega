import './Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Rogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await axios.post('/api/v1/auth/signup', {
                username,
                password,
            });
            window.location.replace('/login');
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div className='register'>
            <span className='registerTitle'>Register</span>
            {error && <span className='errorMessage'>{error}</span>}
            <form action='' className='registerForm' onSubmit={handleSubmit}>
                <label htmlFor=''>Username</label>
                <input
                    type='text'
                    className='registerInput'
                    placeholder='Enter your username...'
                    autoFocus={true}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor=''>Password</label>
                <input
                    type='password'
                    placeholder='Enter your password'
                    className='registerInput'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='registerButton' type='submit'>
                    Register
                </button>
            </form>
            <button className='loginButton'>
                <Link className='link' to='/login'>
                    Login
                </Link>
            </button>
        </div>
    );
}
