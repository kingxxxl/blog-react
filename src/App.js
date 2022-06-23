import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddBlog from "./pages/AddBlog";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";


function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/add-blog' element={<AddBlog/>}/>
                        <Route path='/blog/:id' element={<Blog/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
