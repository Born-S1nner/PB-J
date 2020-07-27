import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="App-header">
            <h1>Personal Religion</h1>
            <div className="navbar">
                <Link style={LinkStyle} to="/About">About</Link> |
                <Link style={LinkStyle} to="/">Home</Link> |
                <Link style={LinkStyle} to="/profile">Profile</Link>
            </div>
            
        </header>

    )
}
const LinkStyle = {
    color: '#FFD700',
    textDecoration: 'none'
}

export default Header;