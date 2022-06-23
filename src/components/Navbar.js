import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg  bg-dark fixed-top'>
            <div className='container-fluid'>
                <Link className='navbar-brand text-success' to='/'>
                    BLOGs
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse text-light' id='navbarNavAltMarkup'>
                    <div className='navbar-nav '>
                        <NavLink className='nav-link text-light' to='/'>
                            Home
                        </NavLink>
                        <NavLink className='nav-link text-light' to='/about'>
                            About
                        </NavLink>
                        <NavLink className='nav-link text-light' to='/contact'>
                            Contact us
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;