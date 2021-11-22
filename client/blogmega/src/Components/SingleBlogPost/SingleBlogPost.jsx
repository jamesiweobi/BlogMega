import './SingleBlogPost.css';

export default function SingleBlogPost() {
    return (
        <div className='SinglePost'>
            <div className='singlePostWrapper'>
                <img
                    src='https://i.pinimg.com/564x/13/53/2a/13532ab66861ff40801f3e03d81bf409.jpg'
                    alt=''
                    className='singlePostImg'
                />
                <h1 className='singlePostTitle'>
                    Lorem ipsum dolor sit amet dolorem.{' '}
                    <div className='singlePostEdit'>
                        <i className='singlePostEdit singlePostIcon icon fas fa-pen-fancy'></i>
                        <i className='singlePostDelete singlePostIcon icon far fa-trash-alt'></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>
                        Author: <b>John</b>{' '}
                        <span className='likes'>
                            Likes: <b>20</b>
                        </span>
                    </span>
                    <span className='singlePostDate'> 1 hour ago</span>
                </div>
                <p className='singlePostText'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque dolore accusantium
                    exercitationem possimus, dicta animi dignissimos iste molestiae distinctio suscipit deleniti
                    adipisci a ipsa, alias molestias similique vero aliquam rem odio nulla, cupiditate culpa sapiente.
                    Rem ad ullam culpa deleniti nisi unde, atque, iste aliquid illum doloremque, fuga error molestias.
                    Amet rerum expedita modi ipsam dolorem velit sed aspernatur tempora ab nemo dolores, itaque
                    repudiandae dignissimos corporis eaque? Nobis, consequatur error saepe fuga illum ad est ut
                    voluptates dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum, sit
                    aliquam temporibus rerum asperiores, modi vitae amet, similique perspiciatis fugiat optio doloremque
                    eveniet architecto voluptatibus. Quis architecto quae vel earum, laboriosam optio fugiat, dolorum
                    perferendis illo totam, iusto dignissimos ratione amet dolor alias. Rem eveniet, illum eos sapiente
                    excepturi eaque fugit quo quaerat, minus debitis eum velit praesentium odit, modi ipsam assumenda
                    consequatur odio iste voluptate placeat? Quam doloribus quibusdam vel tempora laborum eveniet
                    nostrum sed corporis repudiandae ex, blanditiis iusto quod rerum fugit eaque? Ducimus autem eaque
                    debitis culpa. Qui, explicabo. Repellat fuga perferendis amet, iusto qui, possimus dolore quia
                    dolorum iure, tenetur quam voluptate corrupti rem molestias in quod! Expedita sint inventore magnam
                    qui nihil libero et quaerat sunt dicta laborum, ea esse officia architecto repellendus ab beatae
                    voluptate minus deserunt laudantium ipsum? Earum aliquid, maxime nihil vero quae hic laboriosam
                    perferendis error velit enim, dolorem voluptatum similique perspiciatis numquam distinctio obcaecati
                    cumque debitis dolor rerum ullam rem aut laborum! A at voluptate illo doloribus officiis placeat
                    perspiciatis, debitis unde. Nemo deleniti rerum dolorum quis, voluptates voluptatum neque cum quod
                    reiciendis et corporis, quasi iusto aliquam dolore odit iste repellendus quo similique ex fuga
                    adipisci nesciunt? Pariatur.
                </p>
            </div>
        </div>
    );
}
