// Misc
import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

// Components
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

// Icons
import { MdEmail, MdLocationOn, MdOutlineWeb, MdFileDownload } from "react-icons/md";
import { FaPhoneAlt, FaPrint } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function Resume() {
    return (
        <div id="resume-page">
            <Helmet>
                <title>Barik's Resume</title>
            </Helmet>
            <Navbar active={"resume"} />

            <div id="resume-container">
                {/* Resume Top */}
                <div id="resume-top">

                    {/* Title */}
                    <div>
                        <h1>Barik Boley</h1>
                        <h2>Full Stack Web Developer</h2>
                        <button id="print-btn" className="resume-btn" title="Print resume" onClick={() => window.print()}><FaPrint /></button>
                    </div>

                    {/* Contacts */}
                    <div id="resume-contacts">
                        <div className="contact-div"><a className="resume-text" href="mailto:barik.boley@gmail.com">barik.boley@gmail.com <MdEmail className="resume-icon" /></a></div>
                        <div className="contact-div"><a className="resume-text" href="tel:602-668-6436">(602) 668-6436 <FaPhoneAlt className="resume-icon" /></a></div>
                        <div className="contact-div"><a className="resume-text" href="https://www.google.com/maps/place/Phoenix,+AZ/@33.6050991,-112.4052323,10z/data=!3m1!4b1!4m5!3m4!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!8m2!3d33.4483771!4d-112.0740373" target="_blank" rel="noreferrer">Phoenix, United States <MdLocationOn className="resume-icon" /></a></div>
                        <div className="contact-div"><a className="resume-text" href="https://github.com/xBarikadex" target="_blank" rel="noreferrer">github.com/xBarikadex <BsGithub className="resume-icon" /></a></div>
                        <div className="contact-div" id="resume-website-link"><a className="resume-text" href="barikboley.com" target="_blank" rel="noreferrer">barikboley.com <MdOutlineWeb className="resume-icon" /></a></div>
                    </div>
                </div>

                {/* Resume Statement */}
                <div>
                    <p className="resume-text center-text">Actively seeking an entry-level position to gain practical experience and grow my professional skills. Eager and motivated to help the Technology department.</p>
                </div>  

                {/* Resume Bottom */}
                <div id="resume-bottom">
                    {/* Left Column */}
                    <div className="column">
                        {/* Education */}
                        <div>
                            <h3>Education</h3><hr/>
                            {/* Web Development */}
                            <div className="text-boxes">
                                <h4 className="experience-title">Full Stack Web Development</h4>
                                <h4 className="experience-subtitle">West MEC - Technical Training Education</h4>
                                <div className="inline-date-container">
                                    <p className="resume-subtitles">08/2020 - 05/2022</p>
                                    <p className="resume-subtitles">3.75 GPA</p>
                                </div>
                                <div>
                                    <p className="list-title">Technical Courses</p>
                                    <ul className="experience-list columns-list">
                                        <li className="resume-text">Coding Fundamentals</li>
                                        <li className="resume-text">Coding III</li>
                                    </ul>

                                    {/* Brackets */}
                                    <div className="bracket-pair" id="brackets_1">
                                        <div className="opening-bracket"></div>
                                        <div className="closing-bracket"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Engineering */}
                            <div className="text-boxes">
                                <h4 className="experience-title">CTE Engineering</h4>
                                <h4 className="experience-subtitle">Boulder Creek High School</h4>
                                <div className="inline-date-container">
                                    <p className="resume-subtitles">08/2018 - 05/2022</p>
                                    <p className="resume-subtitles">3.88 GPA</p>
                                </div>
                                <div>
                                    <p className="list-title">Technical Courses</p>
                                    <ul className="experience-list">
                                        <li className="resume-text">Introduction to Engineering</li>
                                        <li className="resume-text">Principles of Engineering</li>
                                        <li className="resume-text">Aerospace Engineering</li>
                                        <li className="resume-text">Engineering Design and Development</li>
                                    </ul>

                                    {/* Brackets */}
                                    <div className="bracket-pair" id="brackets_2">
                                        <div className="opening-bracket"></div>
                                        <div className="closing-bracket"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Work Experience */}
                        <div>
                            <h3>Work Experience</h3><hr/>
                            {/* Sales Associate */}
                            <div className="text-boxes">
                                <h4 className="experience-title">Sales Associate</h4>
                                <h4 className="experience-subtitle">Go Paddle AZ</h4>
                                <div className="inline-date-container">
                                    <p className="resume-subtitles">04/2021 - 07/2021</p>
                                    <p className="resume-subtitles">Peoria AZ, USA</p>
                                </div>
                                <p className="resume-description">Kayak and Paddleboard rental company at Lake Pleasant</p>
                                <div>
                                    <p className="list-title">Achievements/Tasks</p>
                                    <ul className="experience-list">
                                        <li className="resume-text no-columns-list">Clean and Maintain Equipment</li>
                                        <li className="resume-text no-columns-list">Give customers proper equipment</li>
                                        <li className="resume-text no-columns-list">Help customers into and out of the lake</li>
                                    </ul>

                                    {/* Brackets */}
                                    <div className="bracket-pair" id="brackets_3">
                                        <div className="opening-bracket"></div>
                                        <div className="closing-bracket"></div>
                                    </div>
                                </div>
                                <p className="resume-subtitles">Contact: Jared Sutter - <a href="tel:6025714930">(602) 571-4930</a></p>
                            </div>

                            {/* Landscaper */}
                            <div className="text-boxes">
                                <h4 className="experience-title">Landscaper</h4>
                                <h4 className="experience-subtitle">J&R Property Maintenance Corp.</h4>
                                <div className="inline-date-container">
                                    <p className="resume-subtitles">05/2020 - 07/2020</p>
                                    <p className="resume-subtitles">West Jordan UT, USA</p>
                                </div>
                                <p className="resume-description">Residential landscaping and monthly lawn/vegetation maintenance</p>
                                <div>
                                    <p className="list-title">Achievements/Tasks</p>
                                    <ul className="experience-list">
                                        <li className="resume-text no-columns-list">10-12 hour days, 5 days a week</li>
                                        <li className="resume-text no-columns-list">Laying sod</li>
                                        <li className="resume-text no-columns-list">Installing residential pathways</li>
                                        <li className="resume-text no-columns-list">Constructing walls</li>
                                    </ul>

                                    {/* Brackets */}
                                    <div className="bracket-pair" id="brackets_4">
                                        <div className="opening-bracket"></div>
                                        <div className="closing-bracket"></div>
                                    </div>
                                </div>
                                <p className="resume-subtitles">Contact: James Smith - <a href="tel:8016528366">(801) 652-8366</a></p>
                            </div>
                        </div>

                        {/* Connected Dots 1 */}
                        <div className="connected-bullets" id="dots_1">
                            <div className="circle"></div>
                            <div className="line" id="line_1"></div>
                            <div className="circle circle_2"></div>
                        </div>

                        {/* Connected Dots 2 */}
                        <div className="connected-bullets" id="dots_2">
                            <div className="circle"></div>
                            <div className="line" id="line_2"></div>
                            <div className="circle circle_2"></div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div id="right-col" className="column">
                        {/* Skills */}
                        <div>
                            <h3>Skills</h3><hr/>

                            <div className="text-boxes">
                                <div className="resume-text skill-box">Active Listening</div>
                                <div className="resume-text skill-box">Leadership</div>
                                <div className="resume-text skill-box">Computer Skills</div>
                                <div className="resume-text skill-box">Hard Working</div>
                                <div className="resume-text skill-box">Dedicated</div>
                                <div className="resume-text skill-box">Troubleshooting</div>
                                <div className="resume-text skill-box">Web Development</div>
                                <div className="resume-text skill-box">Computer-Assisted Design</div>
                            </div>
                        </div>
                        
                        {/* Personal Projects */}
                        <div id="personal-projects">
                            <h3>Personal Projects</h3><hr/>

                            <div className="text-boxes">
                                <p className="resume-text">Building Computers (06/2017 - Present)</p>
                                <ul className="descriptor-list"><li>Building and upgrading my desktop</li></ul>

                                <p className="resume-text">Portfolio Website (02/2021 - Present)</p>
                                <ul className="descriptor-list"><li>Creating and updating my portfolio website</li></ul>

                                <p className="resume-text">Eagle Project (10/2019 - 11/2019)</p>
                                <ul className="descriptor-list">
                                    <li>Organized a retirement home talent show at Merrill Gardens</li>
                                    <li>Coordinated With Merrill Gardens" executive director</li>
                                    <li>Planned the entertainment and refreshments</li>
                                </ul>
                            </div>
                        </div>

                        {/* Organizations */}
                        <div>
                            <h3>Organizations</h3><hr/>

                            <div className="text-boxes">
                                <p className="resume-text">Future Business Leaders of America (08/2020 - 05/2022)</p>
                                <p className="resume-text">Boys Scouts of America (03/2016 - 12/2019)</p>
                                <p className="resume-description">Eagle Scout</p>
                            </div>
                        </div>

                        {/* Certificates */}
                        <div>
                            <h3>Certificates</h3><hr/>

                            <div className="text-boxes">
                                <p className="resume-text">Autodesk Certification<Link to="/Downloads/Autodesk_Certification.pdf" target="_blank" download className="resume-btn download-btn" title="Autodesk certification download"><MdFileDownload /></Link>(08/2018 - 05/2021)</p>
                                <p className="resume-description">Certiport Professional Exam</p>

                                <p className="resume-text">MTA HTML5 and CSS3<Link to="/Downloads/HTML5_Certification.pdf" target="_blank" download className="resume-btn download-btn" title="HTML5 certification download"><MdFileDownload /></Link>(08/2020 - 05/2021)</p>
                                <p className="resume-description">Microsoft Technology Associate</p>

                                <p className="resume-text">CIW Javascript Specialist<Link to="/Downloads/CIW_Javascript_Certification.pdf" target="_blank" download className="resume-btn download-btn" title="CIW Javascript Certification download"><MdFileDownload /></Link>(08/2020 - 05/2022)</p>
                                <p className="resume-description">Certified Internet Web Professional</p>
                            </div>
                        </div>

                        {/* Interests */}
                        <div>
                            <h3>Interests</h3><hr/>

                            <div className="text-boxes">
                                <div className="resume-text interest-box">Lifting Weights</div>
                                <div className="resume-text interest-box">Building Computers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer newPosition={"relative"} />
        </div>
    )
}

export default Resume
