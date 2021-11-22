import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const user = false;
    return (
        <div className='nav'>
            <div className='navLeft'>
                {user ? (
                    <img
                        className='navImage'
                        src='https://pokecharms.com/data/attachment-files/2015/10/236932_Bulbasaur_Picture.png'
                        alt='profilePicture'
                        srcset=''
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
                        <Link to='/about' className='link'>
                            ABOUT
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
                    <li className='navListItem'>
                        <Link to='/logout' className='link'>
                            {user && 'LOGOUT'}
                        </Link>
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
