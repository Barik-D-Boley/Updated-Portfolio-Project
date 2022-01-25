import React from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import profilePicture from '../Images/placeholder-image.jpg';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin, BsGithub } from 'react-icons/bs';


function Homepage() {
    return (
        <div>
            <Navbar active={'homepage'} />
            <div className='container-div'>
                <div className='content-div'>
                    <div id='profile-picture-container'>
                        <img src={profilePicture} alt='Portrait' id='profile-picture' />
                    </div>
                    <div id='profile-information'>
                        <h1>Barik Boley</h1>
                        <h3>Full-Stack Web Developer</h3>
                        <p>The greatest glory in living lies not in never falling, but in rising every time we fall. <em>-Nelson Mandela</em></p>
                        <div id='socials'>
                            <a href='tel:602-668-6436'><FaPhoneAlt className='icon' /></a>
                            <a href='mailto: barik.boley@gmail.com'><MdEmail className='icon' /></a>
                            <a href='https://www.linkedin.com/in/barik-boley-b2088820b/' target='_blank' rel='noreferrer'><BsLinkedin className='icon' /></a>
                            <a href='https://github.com/BarikBoley' target='_blank' rel='noreferrer'><BsGithub className='icon' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage
