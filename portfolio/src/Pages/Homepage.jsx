import React from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

function Homepage() {
    return (
        <div>
            <Navbar active={'homepage'} />
            Homepage
            <Footer />
        </div>
    )
}

export default Homepage
