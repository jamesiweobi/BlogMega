import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='login'>
            <span className='loginTitle'>Login</span>
            <form action='' className='loginForm'>
                <label>Username</label>
                <input type='text' className='loginInput' placeholder='Enter your username...' autoFocus={true} />
                <label>Password</label>
                <input type='password' placeholder='Enter your password' className='loginInput' />
                <button className='login-Button'>Login</button>
            </form>
            <button className='registarButton'>
                <Link className='link' to='/register'>
                    Register
                </Link>
            </button>
        </div>
    );
}
