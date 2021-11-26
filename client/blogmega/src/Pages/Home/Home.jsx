import './Home.css';
import Header from '../../Components/header/Header';
import Posts from '../../Components/Posts/Posts';
import SideBar from '../../Components/SIde Bar/SideBar';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axios.get('/api/v1/blogs/');
            setPosts(data.data);
        };
        fetchPosts();
    }, []);
    return (
        <>
            <Header />
            <div className='home'>
                <SideBar />
                <Posts posts={posts} />
            </div>
        </>
    );
}
