import './SingleBlogPost.css';
import { useLocation } from 'react-router';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../Context/Context';

export default function SingleBlogPost() {
    const { user } = useContext(Context);
    const location = useLocation();
    const path = location.pathname.split('/')[3];
    const [post, setPost] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const getPost = async () => {
            const { data } = await axios.get('/api/v1/blogs/' + path);
            setPost(data.data);
        };
        getPost();
    }, [path]);
    const handleEditClick = async () => {};

    const handleDeleteClick = async () => {
        try {
            await axios.delete('/api/v1/blogs/' + path);
            window.location.replace('/')
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <>
            {post && (
                <div className='SinglePost' key={post._id}>
                    {error && <span className='errorMessage'>{error}</span>}
                    <div className='singlePostWrapper'>
                        <img src={post.imageUrl} alt='' className='singlePostImg' />
                        <h1 className='singlePostTitle'>
                            {post.header}
                            {post.createdBy?._id === user._id && (
                                <div className='singlePostEdit'>
                                    <i
                                        className='singlePostEdit singlePostIcon icon fas fa-pen-fancy'
                                        onClick={handleEditClick}
                                    ></i>
                                    <i
                                        className='singlePostDelete singlePostIcon icon far fa-trash-alt'
                                        onClick={handleDeleteClick}
                                    ></i>
                                </div>
                            )}
                        </h1>
                        <div className='singlePostInfo'>
                            <span className='singlePostAuthor'>
                                Author: <b>{post.createdBy?.username}</b>
                                <span className='likes'>
                                    Likes: <b>{post.likes}</b>
                                </span>
                            </span>
                            <span className='singlePostDate'>{new Date(post.created_at).toDateString()}</span>
                        </div>
                        <p className='singlePostText'>{post.blogBody}</p>
                    </div>
                </div>
            )}{' '}
        </>
    );
}
