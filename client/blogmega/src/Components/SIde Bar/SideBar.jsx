import './SideBar.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../Context/Context';

export default function SideBar() {
    const { user } = useContext(Context);
    const [cats, setcats] = useState([]);
    useEffect(() => {
        const fetchcats = async () => {
            const { data } = await axios.get('/api/v1/blogs/');
            setcats(data.data);
        };
        fetchcats();
    }, []);
    const categories = cats.map((c) => {
        return { cat: c.category, id: c._id };
    });

    return (
        <div className='sideBar'>
            <div className='sideBarItem'>
                <span className='sideBarTitle'>ABOUT ME</span>
                <img
                    src={
                        user
                            ? user.displayPicture
                            : 'https://i.pinimg.com/564x/04/5c/53/045c539f0a84487c87bc3c59b6647aac.jpg'
                    }
                    alt='profile pciture'
                />
                <p>{user && user.bio}</p>
            </div>
            <div className='sideBarItem'>
                <span className='sideBarTitle'>CATEGORIES</span>
                <ul className='sideBarList'>
                    {categories.map((c) => (
                        <Link className='link' to={'/posts/?category=' + c.cat}>
                            <li className='sideBarListItem' key={c.id}>
                                {c.cat}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='sideBarItem'>
                <span className='sideBarTitle'>FOLLOW US</span>
                <div className='sideBarSocial'>
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
                </div>
            </div>
        </div>
    );
}
