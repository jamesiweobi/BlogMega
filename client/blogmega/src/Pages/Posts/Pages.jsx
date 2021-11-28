import './Pages.css';
import SideBar from '../../Components/SIde Bar/SideBar';
import Posts from '../../Components/Posts/Posts';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pages() {
    const { search } = useLocation();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axios.get('/api/v1/blogs/' + search);
            setPosts(data.data);
        };
        fetchPosts();
    }, [search]);

    return (
        <div className='posts'>
            <SideBar />
            <Posts posts={posts} />
        </div>
    );
}
