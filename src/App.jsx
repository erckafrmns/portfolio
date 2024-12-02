import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import data from './data';
import profile from './assets/sideview.png';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdDeleteSweep } from "react-icons/md";
import { FaLocationDot, FaDownload } from "react-icons/fa6";
import { BsSendFill } from "react-icons/bs";
import { RiMailSendFill } from "react-icons/ri";



function App() {

    // Destructure data
    const { firstname, lastname, roles, intro, school, contacts, skills } = data; 

    // For Typewriter effect
    const [currentRole, setCurrentRole] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < roles[roleIndex].length) {
        const timeout = setTimeout(() => {
            setCurrentRole((prev) => prev + roles[roleIndex].charAt(charIndex));
            setCharIndex(charIndex + 1);
        }, 100); 
        return () => clearTimeout(timeout);
        } else {
        const timeout = setTimeout(() => {
            setCharIndex(0);
            setCurrentRole('');
            setRoleIndex((prev) => (prev + 1) % roles.length); 
        }, 1500); 
        return () => clearTimeout(timeout);
        }
    }, [charIndex, roleIndex, roles]);


      // State to manage form data
      const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        message: ''
    });

    // Handle form input change
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can make an API call to send the form data to your backend here
    };

    
    return (
        <>
            <Navbar/>
            {/* HERO/HOME SECTION */}
            <section className='hero'>
                
                <div className='hero-content'>
                    <div className='hero-left'>.</div>
                    <div className='hero-middle'>
                        <h1>Hi, I'm <span>{firstname}!</span></h1>
                        <h3>I'm a <span>{currentRole}<span className="cursor"></span></span></h3>
                        <p>{intro}</p>
                        <div className='hero-buttons'>
                            <button className='LinkedInBTN'>LinkedIn</button>
                            <button className='GitHubBTN'>GitHub</button>
                        </div>
                    </div>
                    <div className='hero-right'>
                        <img src={profile} alt="" />
                    </div>
                </div>
            </section>
            

            {/* SKILLS SECTION */}
            <section className='skills'> 
                <div className='skills-left'>
                    <h1>SKILLS</h1>
                    <div class="vertical-line"></div>
                </div>

                <div className='skills-right'>
                    <div className='languages'>
                        <h1>Languages</h1>
                        <div className='languages-list'>
                            <ul>
                                {skills.languages.map((skill, index) => (
                                    <li key={index}>
                                        <img src={skill.img} alt={skill.name} />
                                        <span>{skill.name}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                    <div className='frameworks'>
                        <h1>Frameworks</h1>
                        <div className='frameworks-list'>
                            <ul>
                                {skills.frameworks.map((skill, index) => (
                                    <li key={index}>
                                        <img src={skill.img} alt={skill.name} />
                                        <span>{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='others'>
                        <h1>Other Tools</h1>
                        <div className='others-list'>
                            <ul>
                                {skills.tools.map((skill, index) => (
                                    <li key={index}>
                                        <img src={skill.img} alt={skill.name} />
                                        <span>{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='projects'>

            </section>

            <section className='education'>

            </section>

            <section className='contact-me'>                
                <h1>Contact Me</h1>
                <p>Looking to collaborate or have an opportunity to discuss?<br></br>Feel free to reach out! </p>
                
                <div className='contact-container'>
                    <div className='contacts'>
                        <div className='contact-items'>
                            <FaPhoneAlt  className='contact-icons'/>
                            <p>{contacts.phone}</p>
                        </div>
                        <div className='contact-items'>
                            <MdEmail className='contact-icons'/>
                            <p>{contacts.email}</p>
                        </div>
                        <div className='contact-items'>
                            <FaLocationDot className='contact-icons'/>
                            <p>{contacts.location}</p>
                        </div>
                        <div className='contact-items dl-resume'>
                            <button><FaDownload className='contact-icons'/>  Download Resume</button>
                        </div>
                    </div>

                    <div className="vertical-line2"></div>

                    <form className='contact-form' onSubmit={handleSubmit}>
                        <input type="text" id="fullname" name="fullname" placeholder="Name" value={formData.fullname} onChange={handleChange} required/>
                
                        <input type="email" id="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required/>
                 
                        <textarea id="message" name="message" placeholder='Message' rows="4" value={formData.message} onChange={handleChange} required></textarea>

                        <div className='contact-form-btn'>
                            <button type="reset" className='form-reset'><MdDeleteSweep /> Reset</button>
                            <button type="submit" className='form-submit'><RiMailSendFill /> Send</button>
                        </div>         
                    </form>
                </div>
            </section>
            <Footer/>                          
        </>
    );
}

export default App;
