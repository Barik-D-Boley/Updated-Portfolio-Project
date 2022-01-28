import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

import { init/* , sendForm */ } from '@emailjs/browser';
init("user_fpJp0wfQ4tjfPrmdOUL6M");

function ContactMe() {
    return (
        <div>
            <Navbar active={"contactMe"} />
            <div id="contact-container-div" className="container-div">
                <h5>Get in Touch</h5>
                <form id="send-email">
                    <input type="text" id="name-input" className="email-input" placeholder="Your Name:" /><br />
                    <input type="text" id="email-input" className="email-input" placeholder="Your Email:" /><br />
                    <input type="text" id="email-subject" className="email-input" placeholder="Subject:" />
                    <textarea type="text" id="email-content" className="email-input" placeholder="Dear Barik," />
                    <input type="submit" value="send" />
                </form>

                <div id='socials'>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactMe