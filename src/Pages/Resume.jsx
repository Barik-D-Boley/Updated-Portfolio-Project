import React from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

function Resume() {
    return (
        <div>
            <Navbar active={'resume'} />
            <div id='resume'>
                {/* Resume Top */}
                <div id='resume-top'>
                    {/* Title */}
                    <div id='resume-title'>
                        <h1>Barik Boley</h1>
                        <h3>Full Stack Web Developer</h3>
                    </div>

                    {/* Contacts */}
                    <div id='resume-contacts'>
                        <a className='barik-contact' href="mailto:barik.boley@gmail.com">barik.boley@gmail.com <MdEmail /></a>
                        <a className='barik-contact' href="tel:602-668-6436">(602) 668-6436 <FaPhoneAlt /></a>
                        <a className='barik-contact' href="https://www.google.com/maps/place/Phoenix,+AZ/@33.6050991,-112.4052323,10z/data=!3m1!4b1!4m5!3m4!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!8m2!3d33.4483771!4d-112.0740373" target="_blank" >Phoenix, United States <MdLocationOn /></a>
                        <a className='barik-contact' href="https://github.com/BarikBoley">github.com/BarikBoley <BsGithub /></a>
                    </div>

                    {/* Resume Statement */}
                    <div id='resume-statement'>
                        <p>Hoping to find an entry-level position to gain practical experience and grow my inter-personal skills. Eager and motivated to help the customer support department.</p>
                    </div>
                </div>

                {/* Resume Bottom */}
                <div id='resume-bottom'>
                    {/* Left Column */}
                    <div id='resume-experience'>
                        {/* Education */}
                        <div id='education'>
                            <h3>Education</h3><hr/>
                            {/* Web Development */}
                            <div id='web-development'>
                                <h4>Full Stack Web Development</h4>
                                <h4>West MEC</h4>
                                <p>08/2020 - 05/2022</p><p>3.75 GPA</p>
                                <p>Courses</p>
                                <ul>
                                    <li>Coding Fundamentals</li>
                                    <li>Coding III</li>
                                </ul>
                            </div>

                            {/* Engineering */}
                            <div id='cte-engineering'>
                                <h4>CTE Engineering</h4>
                                <h4>Boulder Creek</h4>
                                <p>08/2018 - 05/2022</p><p>3.88 GPA</p>
                                <p>Courses</p>
                                <ul>
                                    <li>Introduction to Engineering</li>
                                    <li>Principles of Engineering</li>
                                    <li>Aerospace Engineering</li>
                                    <li>Engineering Design and Development</li>
                                </ul>
                            </div>
                        </div>

                        {/* Work Experience */}
                        <div id='work-experience'>
                            <h3>Work Experience</h3><hr />
                            {/* Sales Associate */}
                            <div id='sales-associate'>
                                <h4>Sales Associate</h4>
                                <h4>Go Paddle AZ</h4>
                                <p>04/2021 - 07/2021</p><p>Peoria AZ, USA</p>
                                <p>Kayak and Paddleboard rental company at Lake Pleasant</p>
                                <p>Achievements/Tasks</p>
                                <ul>
                                    <li>Clean and Maintain Equipment</li>
                                    <li>Give customers proper equipment</li>
                                    <li>Help customers into and out of the lake</li>
                                </ul>
                                <p>Contact: Jared Sutter - (602) 571-4930</p>
                            </div>

                            {/* Landscaper */}
                            <div id='landscaper'>
                                <h4>Landscaper</h4>
                                <h4>J&R Property Maintenance Corp.</h4>
                                <p>05/2020 - 07/2020</p><p>West Jordan UT, USA</p>
                                <p>Residential landscaping and monthly lawn/vegetation maintenance</p>
                                <p>Achievements/Tasks</p>
                                <ul>
                                    <li>10-12 hour days, 5 days a week</li>
                                    <li>Laying sod</li>
                                    <li>Installing residential pathways</li>
                                    <li>Constructing walls</li>
                                </ul>
                                <p>Contact: James Smith - (801) 652-8366</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div id='resume-extras'>
                        {/* Skills */}
                        <div id='skills'>
                            <h3>Skills</h3><hr />

                            <div className='skill-box'>Active Listening</div>
                            <div className='skill-box'>Leadership</div>
                            <div className='skill-box'>Computer Skills</div>
                            <div className='skill-box'>Hard Working</div>
                            <div className='skill-box'>Dedicated</div>
                            <div className='skill-box'>Honest</div>
                            <div className='skill-box'>Web Development</div>
                            <div className='skill-box'>Computer-ASsisted Design</div>
                        </div>
                        
                        {/* Personal Projects */}
                        <div id='personal-projects'>
                            <h3>Personal Projects</h3>

                            <p>Building Computers (06/2017 - Present)</p>
                            <ul><li>Building and upgrading my desktop</li></ul>

                            <p>Portfolio Website (02/2021 - Present)</p>
                            <ul><li>Creating and updating my portfolio website</li></ul>

                            <p>Eagle Project (10/2019 - 11/2019)</p>
                            <ul>
                                <li>Organized a retirement home talent show at Merrill Gardens</li>
                                <li>Coordinated With Merrill Gardens' executive director</li>
                                <li>Planned the entertainment and refreshments</li>
                            </ul>
                        </div>

                        {/* Organizations */}
                        <div>
                            <h3>Organizations</h3><hr />

                            <p>FBLA (08/2020 - 05/2022)</p>
                            <p>Boys Scouts of America (03/2016 - 12/2019)</p>
                            <p>Eagle Scout</p>
                        </div>

                        {/* Certificates */}
                        <div>
                            <h3>Certificates</h3><hr />

                            <p>Autodesk Certification (08/2018 - 05/2021)</p>
                            <p>Certiport Professional Exam</p>

                            <p>MTA HTML5 and CSS3 (08/2020 - 05/2021)</p>
                            <p>Microsoft Technology Associate</p>
                        </div>

                        {/* Interests */}
                        <div>
                            <h3>Interests</h3><hr />

                            <div className='interest-box'>Lifting Weights</div>
                            <div className='interest-box'>Building Computers</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Resume
