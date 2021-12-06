import './NavBar.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Context } from '../../Context/Context';

export default function NavBar() {
    const { user, dispatch } = useContext(Context);

    const [search, setSearch] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (search.length > 0) {
            console.log(search.charAt(0).toUpperCase() + search.slice(1));
            window.location.replace('/posts/?category=' + search.charAt(0).toUpperCase() + search.slice(1));
        }
    };

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
                <a href='https://www.facebook.com/achemu.jackson' target='_blank' rel='noreferrer'>
                    <i className='navIcon fab fa-facebook-f'></i>
                </a>
                <a href='https://www.instagram.com/jachemu/' target='_blank' rel='noreferrer'>
                    <i className='navIcon fab fa-instagram'></i>
                </a>
                <a href='https://www.linkedin.com/in/afcamlogistics/' target='_blank' rel='noreferrer'>
                    <i className='navIcon fab fa-linkedin-in'></i>
                </a>
                <a href='https://twitter.com/JAchemu' target='_blank' rel='noreferrer'>
                    <i className='navIcon fab fa-twitter'></i>
                </a>
                <form className='navSearchBar navListItem' onSubmit={handleSubmit}>
                    <input
                        className='searchInput'
                        type='text'
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search posts by category'
                    />
                    <button className='search' type='submit'>
                        <i class='iconSearch fas fa-search'></i>
                    </button>
                </form>
            </div>
        </div>
    );
}
