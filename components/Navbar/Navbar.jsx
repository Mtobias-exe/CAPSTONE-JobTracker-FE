import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from "/logo.png"

const Navbar = () => {
    return(
        <nav className='navbar'>
            <div className='navbar-left'>
                <img src={logo} alt='empty designs logo' className='logo'/>
            </div>          
            <div className='navbar-right'>
            <ul className='nav-links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar