import React from 'react'
import '../App.css';

const Navbar = () => {
  return (
    <div className='navbar'>
            <nav className='nav-contents'>
                <div className='header'>
                    <ul className='unordered'>
                        <li>Home</li>
                        <li>Login</li>
                        <li>Register</li>
                    </ul>
                </div>

                <div className='toggle-button'>
                    <button>Toggle</button>
                </div>
            </nav>
        </div>
  )
}

export default Navbar