import Post from '../Post/Post';
import './Posts.css';

export default function Posts({ posts }) {
    return (
        <div className='posts'>
            {posts.map((p) => (
                <Post post={p} id={p._id} key={p._id} />
            ))}
        </div>
    );
}
