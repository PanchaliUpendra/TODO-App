import React from 'react';
import logo from './logo.jpg';
import './Navbar.css'
function Navbar()
{
    return(
        <div className='nav-btn'>
            <img src={logo} alt='iloveyou' className="logo-btn"/>
            <div className='head-btn'>
                <h2>To Do App</h2>
                <p className='text-bot'>complete your tasks</p>
            </div>

        </div>
    );
}
export default Navbar;