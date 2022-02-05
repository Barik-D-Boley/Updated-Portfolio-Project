import React from "react";
import { Link } from "react-router-dom";

function footer(newPosition) {
    const { newPosition:num } = newPosition;
    return (
        <div id="footer" className={`footer ${num === "relative" ? "position-relative" : ""}`}>
            <div className="footer-line">Designed by Barik Boley</div>
            <div className="footer-line"><a className="footer-link" href="https://www.google.com/maps/place/2322+W+Via+Perugia,+Phoenix,+AZ+85086/@33.8012229,-112.1116997,18.11z/data=!4m5!3m4!1s0x872b63bc4b9f012b:0xcf0b5956addaef54!8m2!3d33.8013382!4d-112.1113746" target="_blank" rel="noreferrer">2322 W Via Perugia</a></div>
            <div className="footer-line"><Link className="footer-link" to="/contact">Contact Me</Link></div>
            <div className="footer-line">Copyright &copy; 2022 My Thoughts</div>
        </div>
    )
}

export default footer
