import './Profile.css';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../../Context/Context';

export default function Profile() {
    const { user, dispatch } = useContext(Context);
    const [file, setFile] = useState('');
    const [bio, setBio] = useState('');
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = async () => {
        const formData = new FormData();
        if (file) {
            formData.append('bio', bio);
            formData.append('image', file);
            formData.append('id', user._id);
            try {
                await axios.put('/api/v1/auth/update', formData);
                setDisabled(true);
                dispatch({ type: 'LOGOUT' });
            } catch (err) {
                console.log(err.response);
            }
        }
    };
    return (
        <div className='sideBar'>
            <div className='sideBarItem'>
                <span className='sideBarTitle'>HELLO {user?.username.toUpperCase()}</span>
                <div className='displayBox'>
                    <input type='file' id='fileInput' onChange={(e) => setFile(e.target.files[0])} />
                    {file && <img src={URL.createObjectURL(file)} alt='' className='profileImage' />}
                </div>
                <h4 className='selectDPMessage'>Please seelect a display picture</h4>
                <textarea
                    placeholder='Say something about yourself...'
                    className='bioText'
                    onChange={(e) => setBio(e.target.value)}
                    autoFocus
                    maxLength='250'
                ></textarea>
                <button className='profileUpdateB' onClick={handleSubmit} disabled={disabled}>
                    UPDATE PROFILE
                </button>
            </div>
        </div>
    );
}
