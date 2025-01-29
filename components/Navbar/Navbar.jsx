import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className='navbar'>
            <div className='navbar-right'>
            <ul className='nav-links'>
                <li><a href='/home'>Home</a></li>
                <li><a href='/dashboard'>Dashboard</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar