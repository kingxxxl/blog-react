import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddBlog from "./pages/AddBlog";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function MyRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/add-blog' element={<AddBlog/>}/>
            <Route path='/blog/:id' element={<Blog/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
}

export default MyRoutes;