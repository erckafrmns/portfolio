import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdDeleteSweep } from "react-icons/md";
import { FaLocationDot, FaDownload } from "react-icons/fa6";
import { RiMailSendFill } from "react-icons/ri";
import './Contact.css';
import data from '../data';


const Contact = () => {

    // Destructure data
    const { contacts } = data; 

    
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
            <section className='contact-me' id='contact-me'>                
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
        </>
    )
}

export default Contact