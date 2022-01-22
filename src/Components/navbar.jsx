import React from 'react';
import { Link } from 'react-router-dom';

function navbar(active) {
    const { active:num } = active;
    return (
        <nav id='navbar'>
            <Link to='/' id='nav-title'>Barik Boley</Link>
            <div id='nav-pages'>
                <Link to='/' className={`nav-page-link ${(num === 'homepage') ? 'nav-active' : 'nav-inactive'}`}>Homepage</Link>
                <Link to='/resume' className={`nav-page-link ${(num === 'resume') ? 'nav-active' : 'nav-inactive'}`}>Resume</Link>
                <Link to='/aboutMe' className={`nav-page-link ${(num === 'aboutMe') ? 'nav-active' : 'nav-inactive'}`}>About Me</Link>
                <Link to='/gallery' className={`nav-page-link ${(num === 'projectGallery') ? 'nav-active' : 'nav-inactive'}`}>Project Gallery</Link>
                <Link to='/contact' className={`nav-page-link ${(num === 'contactMe') ? 'nav-active' : 'nav-inactive'}`}>Contact Me</Link>
            </div>
        </nav>
    )
}

export default navbar