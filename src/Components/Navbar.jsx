import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className='contanier'>
                <div className="logo">
                    <img src="/images/brand_logo.png" alt="logo" />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button className='btn'>Log In</button>
            </nav>
        </div>
    )
}

export default Navbar
