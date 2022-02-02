import React from "react";
import { Link } from "react-router-dom";

function footer(newPosition) {
    const { newPosition:num } = newPosition;
    return (
        <div id="footer" className={`footer ${num === "relative" ? "position-relative" : ""}`}>
            <div className="footer-line">Designed by Barik Boley</div>
            <div className="footer-line">5902 W Peoria Ave, Glendale, AZ 85302</div>
            <div className="footer-line"><Link id="contact-me" to="/contact">Contact Me</Link></div>
            <div className="footer-line">Copyright &copy; 2022 My Thoughts</div>
        </div>
    )
}

export default footer
