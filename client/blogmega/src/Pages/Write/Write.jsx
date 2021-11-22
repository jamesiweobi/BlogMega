import './Write.css';

export default function Write() {
    return (
        <div className='write'>
            <img
                src='https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt=''
                className='writeImg'
            />
            <form action='' className='writeForm'>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                        <i class='far fa-plus-square icon'></i>
                    </label>
                    <input type='file' id='fileInput' style={{ display: 'none' }} />
                    <input type='text' placeholder='Title' autoFocus={true} className='writeInput' />
                </div>
                <div className='writeFormGroup'>
                    <textarea
                        placeholder='Enter blog-post content here'
                        type='text'
                        className='writeText writeInput'
                    ></textarea>
                </div>
                <button className='writeSubmit'>Post Blog</button>
            </form>
        </div>
    );
}
