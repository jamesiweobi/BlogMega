import './Post.css';
import { Link } from 'react-router-dom';

export default function Post() {
    return (
        <div className='post'>
            <img
                className='postImg'
                src='https://i.pinimg.com/564x/a4/a5/d5/a4a5d551d36d2adef0b87a3fbe854f36.jpg'
                alt='post'
            />
            <div className='postInfo'>
                <div className='postCategories'>
                    <span className='postCategory'>Music</span>
                    <span className='postCategory'>Life</span>
                </div>
                <span className='postTilte'>
                    <Link className='link' to='/post/vknri'>
                        Lorem ipsum dolor sit amet.
                    </Link>
                </span>
                <hr />
                <div className='postDate'>1 hour ago</div>
            </div>
            <p className='postDescription'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum nostrum inventore dolore fuga?
                Eum assumenda quia illo. Iste quod blanditiis ad! Maiores minima aperiam neque repellat modi nulla
                architecto nisi corporis. Rerum est voluptas iste alias mollitia veritatis dicta, dolore ab natus
                commodi doloribus suscipit neque itaque deleniti autem quas ratione velit! Aperiam aliquam laudantium
                voluptatem officiis, consectetur vitae quas eos illo, facere non voluptas, unde suscipit tenetur
                voluptatibus sunt tempore accusamus sed? Eligendi, commodi! At magnam ipsum beatae.
            </p>
        </div>
    );
}
