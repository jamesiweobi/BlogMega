import SideBar from '../../Components/SIde Bar/SideBar';
import SingleBlogPost from '../../Components/SingleBlogPost/SingleBlogPost';
import './SinglePost.css';

export default function SinglePost() {
    return (
        <div className='Single'>
            <SideBar />
            <SingleBlogPost />
        </div>
    );
}
