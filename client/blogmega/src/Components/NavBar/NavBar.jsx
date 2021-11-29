import './NavBar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../Context/Context';

export default function NavBar() {
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <div className='nav'>
            <div className='navLeft'>
                {user ? (
                    <img
                        className='navImage'
                        src={
                            user
                                ? user.displayPicture
                                : 'https://i.pinimg.com/564x/04/5c/53/045c539f0a84487c87bc3c59b6647aac.jpg'
                        }
                        alt='profilePicture'
                    />
                ) : (
                    <ul className='navList'>
                        <li className='navListItem'>
                            <Link className='link' to='/login'>
                                LOGIN
                            </Link>
                        </li>
                        <li className='navListItem'>
                            <Link className='link' to='/register'>
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
            <div className='navCenter'>
                <ul className='navList'>
                    <li className='navListItem'>
                        <Link to='/' className='link'>
                            HOME
                        </Link>
                    </li>
                    <li className='navListItem'>
                        <Link to='/posts' className='link'>
                            POSTS
                        </Link>
                    </li>
                    <li className='navListItem'>
                        <Link to='/profile' className='link'>
                            PROFILE
                        </Link>
                    </li>
                    {user ? (
                        <li className='navListItem'>
                            <Link to='/create-post' className='link'>
                                WRITE
                            </Link>
                        </li>
                    ) : (
                        ''
                    )}
                    <li className='navListItem' onClick={handleLogout}>
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className='navRight'>
                <i className='navIcon fab fa-facebook-f'></i>
                <i className='navIcon fab fa-instagram'></i>
                <i className='navIcon fab fa-linkedin-in'></i>
                <i className='navIcon fab fa-twitter'></i>
                <div className='navSearchBar navListItem'>
                    <input className='searchInput' type='text' placeholder='Search' />
                </div>
            </div>
        </div>
    );
}
