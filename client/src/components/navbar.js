import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const NavBar = () => {
    return (
        <nav className='nav-wrapper'>
            <div className='nav-container'>
                <Link to="/" className='brand-logo'>
                    < img src={ require('../static/logo.png') } alt='logo' width='110px'></img>
                </Link>
                <ul className='center-nav'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;