import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import profilePicture from "../Images/Portrait.jfif";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";


function Homepage() {
    return (
        <div>
            <Navbar active={"homepage"} />
            <div className="website-container-div">
                <div className="homepage-container-div">
                    <div id="profile-picture-container">
                        <img src={profilePicture} alt="Portrait" id="profile-picture" />
                    </div>
                    <div id="profile-information">
                        <h1>Barik Boley</h1>
                        <h3>Full-Stack Web Developer</h3>
                        <div><p id="homepage-description">My name is Barik Boley, and I am Full-Stack Web Developer gaining experience as a working professional. I've worked summer jobs the past two summers, and have dedicated the rest of my time to education. I currently attend a trade school called <a href="https://west-mec.edu/" target="_blank" rel="noreferrer">West MEC</a>, which I am on track to graduate from with two Microsoft certifications and a knowledge of HTML, CSS, JS, React, and NodeJS. On top of that, I'm finishing a 4 year Engineering course at my high school, and have received a Computer Assisted Design certification. </p></div>
                        <div id="socials">
                            <a href="sms:602-668-6436"><FaPhoneAlt className="icon" /></a>
                            <a href="/contact"><MdEmail className="icon" /></a>
                            <a href="https://www.linkedin.com/in/barik-boley-b2088820b/" target="_blank" rel="noreferrer"><BsLinkedin className="icon" /></a>
                            <a href="https://github.com/xBarikadex" target="_blank" rel="noreferrer"><BsGithub className="icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage
