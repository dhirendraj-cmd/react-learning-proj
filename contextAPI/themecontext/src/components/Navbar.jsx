import React from 'react'
import '../App.css'
import ThemeButton from './ThemeButton'

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

                <div>
                    <ThemeButton/>
                </div>
            </nav>
        </div>
  )
}

export default Navbar