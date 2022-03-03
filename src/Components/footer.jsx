import React from "react";
import { Link } from "react-router-dom";

function footer(newPosition) {
    const { newPosition:num } = newPosition;
    return (
        <div id="footer" className={`footer ${num === "relative" ? "position-relative" : ""}`}>
            <div className="footer-line">Designed by Barik Boley</div>
            <div className="footer-line"><a className="footer-link" href="https://www.google.com/maps/place/Phoenix,+AZ/@33.6056257,-112.1632881,10.5z/data=!4m13!1m7!3m6!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!2sPhoenix,+AZ!3b1!8m2!3d33.4483771!4d-112.0740373!3m4!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!8m2!3d33.4483771!4d-112.0740373" target="_blank" rel="noreferrer">Phoenix, Arizona</a></div>
            <div className="footer-line"><Link className="footer-link" to="/contact">Contact Me</Link></div>
            <div className="footer-line">Copyright &copy; 2022 My Thoughts</div>
        </div>
    )
}

export default footer
