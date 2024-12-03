import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import { FaDownload } from "react-icons/fa6";
import navlogo from '../assets/navbar-logo.png';
import resume from '../assets/Resume.pdf';


const Navbar = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  const handleNavClick = (id) => {
    setActiveLink(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              setActiveLink(`#${entry.target.id}`);
          }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };

  }, []);

  return (
    <>
        <div className='navbar'>
            <img src={navlogo} alt="" />
            <div className='nav-links'>
                <ul>
                    <li><a href="#hero"  className={activeLink === '#hero' ? 'active' : ''} onClick={() => handleNavClick('#hero')}>Home</a></li>
                    <li><a href="#projects"  className={activeLink === '#projects' ? 'active' : ''} onClick={() => handleNavClick('#projects')}>Projects</a></li>
                    <li><a href="#skills"  className={activeLink === '#skills' ? 'active' : ''} onClick={() => handleNavClick('#skills')}>Skills</a></li>
                    <li><a href="#contact-me"  className={activeLink === '#contact-me' ? 'active' : ''} onClick={() => handleNavClick('#contact-me')}>Contact Me</a></li>

                </ul>
                
            </div>
            <a onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}  
              href={resume} download="Resume.pdf" className='hbtn resumeBTN'>
              {isHovered ? "Download" : "Resume"} <FaDownload />
            </a>
        </div>
    </>
  )
}

export default Navbar