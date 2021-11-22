import './Register.css';
import { Link } from 'react-router-dom';

export default function Rogin() {
    return (
        <div className='register'>
            <span className='registerTitle'>Register</span>
            <form action='' className='registerForm'>
                <label htmlFor=''>Username</label>
                <input type='text' className='registerInput' placeholder='Enter your username...' autoFocus={true} />
                <label htmlFor=''>Password</label>
                <input type='password' placeholder='Enter your password' className='registerInput' />
                <button className='registerButton'>Register</button>
            </form>
            <button className='loginButton'>
                <Link className='link' to='/login'>
                    Login
                </Link>
            </button>
        </div>
    );
}
