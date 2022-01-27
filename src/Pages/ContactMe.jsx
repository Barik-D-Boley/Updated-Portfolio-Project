import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

function ContactMe() {
    return (
        <div>
            <Navbar active={"contactMe"} />
            <div id="contact-container-div" className="container-div">
                <h5>Get in Touch</h5>
                <form action="">
                    <input type="text" id="email-input" className="email-input" placeholder="Your Email:" /><br />
                    <input type="text" id="email-subject" className="email-input" placeholder="Subject:" />
                    <textarea type="text" id="email-content" className="email-input" placeholder="Dear Barik," />
                    <input type="submit" id="submit-btn" />
                </form>

                <div id='socials'>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactMe
