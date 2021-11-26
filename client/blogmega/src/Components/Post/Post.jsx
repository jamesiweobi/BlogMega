import './Post.css';
import { Link } from 'react-router-dom';

export default function Post({ post, id }) {
    return (
        <div className='post' key={id}>
            <img className='postImg' src={post.imageUrl} alt='post' />
            <div className='postInfo'>
                <div className='postCategories'>
                    <span className='postCategory'>{post.category}</span>
                </div>
                <span className='postTilte'>
                    <Link className='link' to={'/posts/posts/' + id}>
                        {post.header}
                    </Link>
                </span>
                <hr />
                <div className='postDate'>{new Date(post.created_at).toDateString()}</div>
            </div>
            <p className='postDescription'>{post.blogBody}</p>
        </div>
    );
}
