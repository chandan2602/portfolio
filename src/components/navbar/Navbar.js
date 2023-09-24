import React from 'react';
import "../Navbar.css";
const Navbar = () => {
  return (
    <nav>
        <div className='nav-link'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Service</a></li>
                <li><a href="/">portfolio</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;