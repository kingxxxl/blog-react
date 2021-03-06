import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import BlogList from '../components/home/BlogList';

const Home = () => {
    const navigate = useNavigate();

    const [blogList, setBlogList] = useState([]);

    const onClick = () => {
        navigate('/add-blog');
    };

    useEffect(() => {
        const getBlogs = async () => {
            const request = await fetch('https://reactblog11.herokuapp.com/api/v1/blog');
            const data = await request.json();

            setBlogList(data);
        };

        getBlogs();
    }, []);
    return (
        <div>
            <h1 className='text-center mb-3 text-light'>Blog System</h1>

            <BlogList blogList={blogList}/>
            <button
                onClick={onClick}
                type='button'
                className='btn btn-success w-100 mt-3 p-2'
            >
                Add New Blog
            </button>
        </div>
    );
};

export default Home;
