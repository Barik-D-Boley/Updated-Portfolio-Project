import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Alert from "../Components/alert";

function ContactMe() {
    const [active, setActive] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        let name = document.getElementById("name-input").value;
        let fromEmail = document.getElementById("email-input").value;
        let subject = document.getElementById("email-subject").value;
        let message = document.getElementById("email-content").value;

        if ((name && fromEmail && subject && message) !== "") {
            emailjs.sendForm("service_ntq0jqe", "template_mby0g68", form.current, "user_fpJp0wfQ4tjfPrmdOUL6M")
                .then(() => {
                    // alert("Sent!");
                    setActive(true);
                    document.getElementById("name-input").value = "";
                    document.getElementById("email-input").value = "";
                    document.getElementById("email-subject").value = "";
                    document.getElementById("email-content").value = "";
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            setActive(true);
        }
    }

    return (
        <div>
            <Navbar active={"contactMe"} />
            <div className="website-container-div">
                <div id="contact-container-div" className="container-div">
                    <h5>Get in Touch</h5>
                    <form id="send-email" ref={form} onSubmit={sendEmail}>
                        <input type="text" id="name-input" className="email-input" placeholder="Your Name:" name="from_name" /><hr />
                        <input type="text" id="email-input" className="email-input" placeholder="Your Email:" name="from_email" /><hr />
                        <input type="text" id="email-subject" className="email-input" placeholder="Subject:" name="subject" />
                        <textarea type="text" id="email-content" className="email-input" placeholder="Dear Barik," name="message" />
                        <input type="submit" value="Send" id="submit-btn" className="email-input" />
                    </form>
                </div>
            </div>
            <Footer />
            <Alert active={active} />
        </div>
    )
}

export default ContactMe