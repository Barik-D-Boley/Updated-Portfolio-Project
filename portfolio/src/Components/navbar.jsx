import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {
    return (
        <nav>
            <Link to='/'>Barik Boley</Link>
            <Link to='/'>Homepage</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/aboutMe'>About Me</Link>
            <Link to='/gallery'>Project Gallery</Link>
            <Link to='/contact'>Contact Me</Link>
        </nav>
    )
}

export default navbar
