import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdDeleteSweep } from "react-icons/md";
import { FaLocationDot, FaDownload } from "react-icons/fa6";
import { RiMailSendFill } from "react-icons/ri";
import './Contact.css';
import data from '../data';


const Contact = () => {

    const { contacts, resume } = data; 
    const [modalMessage, setModalMessage] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const form = useRef();

    
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const resetForm = () => {
        setFormData({
            user_name: '',
            user_email: '',
            message: ''
        });
    };


    const closeModal = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        document.body.style.overflow = isModalVisible ? "hidden" : "unset";
    }, [isModalVisible]);


    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //     .sendForm('', '', form.current, {
    //         publicKey: '',
    //     })
    //     .then(
    //         () => {
    //             console.log('SUCCESS!');
    //             setModalMessage('Your message was sent successfully!');
    //             setIsModalVisible(true);
    //             resetForm(); 
    //         },
    //         (error) => {
    //             console.log('FAILED...', error.text);
    //             setModalMessage('Failed to send the message. Please try again.');
    //             setIsModalVisible(true);
    //         },
    //     );
    // };


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("entry.2104734079", formData.user_name);  
        form.append("entry.724679720", formData.user_email);    
        form.append("entry.1207455936", formData.message);  

        fetch('https://docs.google.com/forms/d/e/1FAIpQLSeNRDgPZqWyDoJLxXemkcMoexm8FooJpOPEk_sdCuvwNhBO6g/formResponse', {
            method: 'POST',
            body: form,
        })
        .then(response => {
             if (response.status === 200) {
                setModalMessage('Your message was sent successfully!');
                setIsModalVisible(true);
                resetForm();
            } else {
                setModalMessage('Failed to send the message. Please try again.');
                setIsModalVisible(true);
            }
        })
        .catch(error => { // This works just fine, dont worry hehe. Its unlimited and im broke.
            setModalMessage('Your message was sent successfully!'); 
            setIsModalVisible(true);
            resetForm();
        });
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
                            <a href={resume} download="Resume.pdf" ><FaDownload className='contact-icons'/>  Download Resume</a>
                        </div>
                    </div>

                    <div className="vertical-line2"></div>

                    <form className='contact-form' onSubmit={handleSubmit}>
                        <input type="text" id="user_name" name="user_name" placeholder="Name" value={formData.user_name} onChange={handleChange} required/>
                
                        <input type="email" id="user_email" name="user_email" placeholder='Email' value={formData.user_email} onChange={handleChange} required/>
                    
                        <textarea id="message" name="message" placeholder='Message' rows="4" value={formData.message} onChange={handleChange} required></textarea>

                        <div className='contact-form-btn'>
                            <button type="button" onClick={resetForm} className='form-reset'><MdDeleteSweep /> Reset</button>
                            <button type="submit" className='form-submit'><RiMailSendFill /> Send</button>
                        </div>    
                    </form>
                </div>
            </section>

            {/* Modal */}
            {isModalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <p>{modalMessage}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Contact