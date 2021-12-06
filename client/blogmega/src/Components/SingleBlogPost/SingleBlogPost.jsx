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
    const [header, setHeader] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const { data } = await axios.get('/api/v1/blogs/' + path);
            setPost(data.data);
            setHeader(data.data.header);
            setBlogBody(data.data.blogBody);
        };
        getPost();
    }, [path]);

    const handleLikeClick = async () => {
        try {
            await axios.put('/api/v1/blogs/likes/' + path);
            window.location.reload();
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const handleEditClick = async () => {
        try {
            await axios.put('/api/v1/blogs/' + path, {
                header: header,
                blogBody: blogBody,
            });
            setEditMode(false);
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const handleDeleteClick = async () => {
        try {
            const res = await axios.delete('/api/v1/blogs/' + path);
            window.location.replace('/');
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <>
            {post && (
                <div className='SinglePost'>
                    {error && <span className='errorMessage'>{error}</span>}
                    <div className='singlePostWrapper'>
                        <img src={post.imageUrl} alt='' className='singlePostImg' />
                        {editMode ? (
                            <input
                                type='text'
                                value={header}
                                className='singlePostEditHeader'
                                autoFocus
                                onChange={(e) => setHeader(e.target.value)}
                            />
                        ) : (
                            <h1 className='singlePostTitle'>
                                {header}
                                {post.createdBy?._id === user?._id && (
                                    <div className='singlePostEdit'>
                                        <i
                                            className='singlePostEdit singlePostIcon icon fas fa-pen-fancy'
                                            onClick={() => setEditMode(true)}
                                        ></i>
                                        <i
                                            className='singlePostDelete singlePostIcon icon far fa-trash-alt'
                                            onClick={handleDeleteClick}
                                        ></i>
                                    </div>
                                )}
                            </h1>
                        )}
                        <div className='singlePostInfo'>
                            <span className='singlePostAuthor'>
                                Author: <b>{post.createdBy?.username}</b>
                                <span className='likes' onClick={handleLikeClick}>
                                    Likes: <b>{post.likes}</b>
                                </span>
                            </span>
                            <span className='singlePostDate'>{new Date(post.created_at).toDateString()}</span>
                        </div>
                        {editMode ? (
                            <textarea
                                className='singlePostEditInput'
                                value={blogBody}
                                onChange={(e) => setBlogBody(e.target.value)}
                            />
                        ) : (
                            <p className='singlePostText'>{blogBody}</p>
                        )}
                        {editMode && (
                            <button className='singlePostEditButton' onClick={handleEditClick}>
                                UPDATE POST
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
