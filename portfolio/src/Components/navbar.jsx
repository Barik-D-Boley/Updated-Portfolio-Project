import React from 'react';
import { Link } from 'react-router-dom';

function navbar(active) {
    const { active:num } = active
    console.log(num);
    return (
        <nav id='navbar'>
            <Link to='/' id='navTitle'>Barik Boley</Link>
            <Link to='/' className={` ${(active === 'homepage') ? 'navActive' : ''}`}>Homepage</Link>
            <Link to='/resume' className={`navInactive ${(active === 'resume') ? 'navActive' : ''}`}>Resume</Link>
            <Link to='/aboutMe' className={`navInactive ${(active === 'aboutMe') ? 'navActive' : ''}`}>About Me</Link>
            <Link to='/gallery' className={`navInactive ${(active === 'projectGallery') ? 'navActive' : ''}`}>Project Gallery</Link>
            <Link to='/contact' className={`navInactive ${(active === 'contactMe') ? 'navActive' : ''}`}>Contact Me</Link>
        </nav>
    )
}

export default navbar