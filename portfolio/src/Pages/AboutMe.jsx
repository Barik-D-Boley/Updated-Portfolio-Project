import React from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

function AboutMe() {
    return (
        <div>
            <Navbar active={'aboutMe'} />
            About Me
            <Footer />
        </div>
    )
}

export default AboutMe