import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar(active) {
    const [dropDown, setDropDown] = useState(false);
    
    const { active:num } = active;
    return (
        <div id="navbar">
            <div id="barik"><Link to="/" id="nav-title">Barik Boley</Link></div>
            <button className={`${(dropDown === true) ? "navbar-toggle-btn-active" : "navbar-toggle-btn"}`} onClick={() => dropDown === false ? setDropDown(true) : setDropDown(false)}><GiHamburgerMenu /></button>
            <div className={`${(dropDown === true) ? "nav-drop-down" : "nav-pages"}`}>
                <Link to="/" className={`nav-page-link ${(num === "homepage") ? "nav-active" : "nav-inactive"}`}>Homepage</Link>
                <Link to="/resume" className={`nav-page-link ${(num === "resume") ? "nav-active" : "nav-inactive"}`}>Resume</Link>
                <Link to="/gallery" className={`nav-page-link ${(num === "projectGallery") ? "nav-active" : "nav-inactive"}`}>Project Gallery</Link>
                <Link to="/contact" className={`nav-page-link ${(num === "contactMe") ? "nav-active" : "nav-inactive"}`}>Contact Me</Link>
            </div>
        </div>
    )
}

export default Navbar