import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function Resume() {
    return (
        <div>
            <Navbar active={"resume"} />

            <div id="resume-container">
                {/* Resume Top */}
                <div id="resume-top">

                    {/* Title */}
                    <div>
                        <h1>Barik Boley</h1>
                        <h2>Full Stack Web Developer</h2>
                    </div>

                    {/* Contacts */}
                    <div id="resume-contacts">
                        <div className="contact-div"><a className="regular-text" href="mailto:barik.boley@gmail.com">barik.boley@gmail.com <MdEmail className="resume-icon" /></a></div>
                        <div className="contact-div"><a className="regular-text" href="tel:602-668-6436">(602) 668-6436 <FaPhoneAlt className="resume-icon" /></a></div>
                        <div className="contact-div"><a className="regular-text" href="https://www.google.com/maps/place/Phoenix,+AZ/@33.6050991,-112.4052323,10z/data=!3m1!4b1!4m5!3m4!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!8m2!3d33.4483771!4d-112.0740373" target="_blank" rel="noreferrer">Phoenix, United States <MdLocationOn className="resume-icon" /></a></div>
                        <div className="contact-div"><a className="regular-text" href="https://github.com/BarikBoley" target="_blank" rel="noreferrer">github.com/BarikBoley <BsGithub className="resume-icon" /></a></div>
                    </div>
                </div>

                {/* Resume Statement */}
                <div>
                    <p className="regular-text">Hoping to find an entry-level position to gain practical experience and grow my inter-personal skills. Eager and motivated to help the customer support department.</p>
                </div>  

                {/* Resume Bottom */}
                <div>
                    {/* Left Column */}
                    <div>
                        {/* Education */}
                        <div>
                            <h3>Education</h3><hr/>
                            {/* Web Development */}
                            <div>
                                <h4>Full Stack Web Development</h4>
                                <h4>West MEC</h4>
                                <p>08/2020 - 05/2022</p><p>3.75 GPA</p>
                                <p>Courses</p>
                                <ul>
                                    <li className="regular-text">Coding Fundamentals</li>
                                    <li className="regular-text">Coding III</li>
                                </ul>
                            </div>

                            {/* Engineering */}
                            <div>
                                <h4>CTE Engineering</h4>
                                <h4>Boulder Creek</h4>
                                <p>08/2018 - 05/2022</p><p>3.88 GPA</p>
                                <p>Courses</p>
                                <ul>
                                    <li className="regular-text">Introduction to Engineering</li>
                                    <li className="regular-text">Principles of Engineering</li>
                                    <li className="regular-text">Aerospace Engineering</li>
                                    <li className="regular-text">Engineering Design and Development</li>
                                </ul>
                            </div>
                        </div>

                        {/* Work Experience */}
                        <div>
                            <h3>Work Experience</h3><hr/>
                            {/* Sales Associate */}
                            <div>
                                <h4>Sales Associate</h4>
                                <h4>Go Paddle AZ</h4>
                                <p>04/2021 - 07/2021</p><p>Peoria AZ, USA</p>
                                <p>Kayak and Paddleboard rental company at Lake Pleasant</p>
                                <p>Achievements/Tasks</p>
                                <ul>
                                    <li className="regular-text">Clean and Maintain Equipment</li>
                                    <li className="regular-text">Give customers proper equipment</li>
                                    <li className="regular-text">Help customers into and out of the lake</li>
                                </ul>
                                <p>Contact: Jared Sutter - (602) 571-4930</p>
                            </div>

                            {/* Landscaper */}
                            <div>
                                <h4>Landscaper</h4>
                                <h4>J&R Property Maintenance Corp.</h4>
                                <p>05/2020 - 07/2020</p><p>West Jordan UT, USA</p>
                                <p>Residential landscaping and monthly lawn/vegetation maintenance</p>
                                <p>Achievements/Tasks</p>
                                <ul>
                                    <li className="regular-text">10-12 hour days, 5 days a week</li>
                                    <li className="regular-text">Laying sod</li>
                                    <li className="regular-text">Installing residential pathways</li>
                                    <li className="regular-text">Constructing walls</li>
                                </ul>
                                <p>Contact: James Smith - (801) 652-8366</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        {/* Skills */}
                        <div>
                            <h3>Skills</h3><hr/>

                            <div className="regular-text skill-box">Active Listening</div>
                            <div className="regular-text skill-box">Leadership</div>
                            <div className="regular-text skill-box">Computer Skills</div>
                            <div className="regular-text skill-box">Hard Working</div>
                            <div className="regular-text skill-box">Dedicated</div>
                            <div className="regular-text skill-box">Honest</div>
                            <div className="regular-text skill-box">Web Development</div>
                            <div className="regular-text skill-box">Computer-Assisted Design</div>
                        </div>
                        
                        {/* Personal Projects */}
                        <div id="personal-projects">
                            <h3>Personal Projects</h3>

                            <p>Building Computers (06/2017 - Present)</p>
                            <ul><li>Building and upgrading my desktop</li></ul>

                            <p>Portfolio Website (02/2021 - Present)</p>
                            <ul><li>Creating and updating my portfolio website</li></ul>

                            <p>Eagle Project (10/2019 - 11/2019)</p>
                            <ul>
                                <li>Organized a retirement home talent show at Merrill Gardens</li>
                                <li>Coordinated With Merrill Gardens" executive director</li>
                                <li>Planned the entertainment and refreshments</li>
                            </ul>
                        </div>

                        {/* Organizations */}
                        <div>
                            <h3>Organizations</h3><hr/>

                            <p>FBLA (08/2020 - 05/2022)</p>
                            <p>Boys Scouts of America (03/2016 - 12/2019)</p>
                            <p>Eagle Scout</p>
                        </div>

                        {/* Certificates */}
                        <div>
                            <h3>Certificates</h3><hr/>

                            <p>Autodesk Certification (08/2018 - 05/2021)</p>
                            <p>Certiport Professional Exam</p>

                            <p>MTA HTML5 and CSS3 (08/2020 - 05/2021)</p>
                            <p>Microsoft Technology Associate</p>
                        </div>

                        {/* Interests */}
                        <div>
                            <h3>Interests</h3><hr/>

                            <div className="regular-text interest-box">Lifting Weights</div>
                            <div className="regular-text interest-box">Building Computers</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Resume
