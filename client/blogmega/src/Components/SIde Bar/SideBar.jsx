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
    const categories = cats.map((c) => c.category);
    const catss = new Set(categories);
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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat dolore ducimus veritatis
                    tempora recusandae similique eveniet esse tenetur harum?
                </p>
            </div>
            <div className='sideBarItem'>
                <span className='sideBarTitle'>CATEGORIES</span>
                <ul className='sideBarList'>
                    {[...catss].map((c) => (
                        <Link className='link' to={'/posts/?category=' + c}>
                            <li className='sideBarListItem'>{c}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='sideBarItem'>
                <span className='sideBarTitle'>FOLLOW US</span>
                <div className='sideBarSocial'>
                    <i className='sideBarIcon fab fa-facebook-f'></i>
                    <i className='sideBarIcon fab fa-instagram'></i>
                    <i className='sideBarIcon fab fa-linkedin-in'></i>
                    <i className='sideBarIcon fab fa-twitter'></i>
                </div>
            </div>
        </div>
    );
}
