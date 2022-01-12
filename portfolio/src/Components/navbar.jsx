import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {
    return (
        <nav id='navbar'>
            <Link to='/' className='navActive'>Barik Boley</Link>
            <Link to='/' className='navActive'>Homepage</Link>
            <Link to='/resume' className='navInactive'>Resume</Link>
            <Link to='/aboutMe' className='navInactive'>About Me</Link>
            <Link to='/gallery' className='navInactive'>Project Gallery</Link>
            <Link to='/contact' className='navInactive'>Contact Me</Link>
        </nav>
    )
}

export default navbar