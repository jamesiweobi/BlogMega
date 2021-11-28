import './Write.css';
import { useState, useContext } from 'react';
import { Context } from '../../Context/Context';
import axios from 'axios';

export default function Write() {
    const { user } = useContext(Context);
    const [header, setHeader] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const [file, setFile] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = async (e) => {
        setSuccess('');
        setError('');
        e.preventDefault();
        if (!file) {
            setError('Please Attach a single blog image');
        }
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            try {
                formData.append('header', header);
                formData.append('blogBody', blogBody);
                formData.append('createdBy', user._id);
                await axios.post('/api/v1/blogs', formData);
                setSuccess('Blog created successfully');
                setDisabled(true);
            } catch (err) {
                setError(err.response.data);
            }
        }
    };

    return (
        <div className='write'>
            {error && <span className='errorMessage'>{error}</span>}
            {success && <span className='errorMessage'>{success}</span>}
            {file && <img src={URL.createObjectURL(file)} alt='' className='writeImg' />}

            <form action='' className='writeForm' onSubmit={handleSubmit}>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                        <i class='far fa-plus-square icon'></i>
                    </label>
                    <input
                        type='file'
                        id='fileInput'
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: 'none' }}
                    />
                    <input
                        type='text'
                        placeholder='Title'
                        autoFocus={true}
                        className='writeInput'
                        onChange={(e) => setHeader(e.target.value)}
                    />
                </div>
                <div className='writeFormGroup'>
                    <textarea
                        placeholder='Enter blog-post content here'
                        type='text'
                        className='writeText writeInput'
                        onChange={(e) => setBlogBody(e.target.value)}
                    ></textarea>
                </div>
                <button className='writeSubmit' type='submit' disabled={disabled}>
                    Post Blog
                </button>
            </form>
        </div>
    );
}
