import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const AddBlog = () => {
    const navigate = useNavigate();
    const onClick = async (e) => {
        const request = await fetch('http://localhost:3030/api/v1/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, body}),
        });

        const data = await request.json();

        if (request.status === 201) {
            navigate('/');
        }
    };
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    return (
        <div>
            <h1 className='text-center my-3 text-light'>Add Blog</h1>
            <input
                type='text'
                placeholder='Please enter your title'
                className='form-control'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className='form-control mt-3'
                rows='10'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                style={{resize: 'none'}}
                placeholder='Enter your blog body here ! '
            />

            <button
                onClick={onClick}
                type='button'
                className='btn btn-primary btn-lg mt-3 text-light w-100'
            >
                Add Blog
            </button>
        </div>
    );
};

export default AddBlog;
