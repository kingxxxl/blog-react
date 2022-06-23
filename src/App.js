import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar";

import MyRoutes from "./MyRoutes";


function App() {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <MyRoutes/>
            </div>
        </>
    );
}

export default App;
