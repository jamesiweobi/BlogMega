import './SingleBlogPost.css';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SingleBlogPost() {
    const location = useLocation();
    const path = location.pathname.split('/');
    const [post, setPost] = useState({});
    console.log(path);
    useEffect(() => {
        const getPost = async () => {
            const { data } = await axios.get('/api/v1/blogs/' + path[3]);
            setPost(data.data);
        };
        getPost();
    }, [path]);
    return (
        <div className='SinglePost'>
            <div className='singlePostWrapper'>
                <img src={post.imageUrl} alt='' className='singlePostImg' />
                <h1 className='singlePostTitle'>
                    {post.header}
                    <div className='singlePostEdit'>
                        <i className='singlePostEdit singlePostIcon icon fas fa-pen-fancy'></i>
                        <i className='singlePostDelete singlePostIcon icon far fa-trash-alt'></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>
                        {/* Author: <b>{post.createdBy.username}</b>  ADD the username of creator here */}
                        <span className='likes'>
                            Likes: <b>{post.likes}</b>
                        </span>
                    </span>
                    <span className='singlePostDate'>{new Date(post.created_at).toDateString()}</span>
                </div>
                <p className='singlePostText'>{post.blogBody}</p>
            </div>
        </div>
    );
}
