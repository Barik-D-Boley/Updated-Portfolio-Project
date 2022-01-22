import React from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

function ContactMe() {
    return (
        <div>
            <Navbar active={'contactMe'} />
            Contact Me
            <Footer />
        </div>
    )
}

export default ContactMe
