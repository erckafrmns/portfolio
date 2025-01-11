import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FaDownload } from "react-icons/fa6";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import navlogo from '../assets/navbar-logo.png';
import data from '../data';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Navbar = () => {

  const { resume } = data;
  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef();

  useGSAP(() => {
    gsap.from(".navbar-logo", {
      y: -200,
      opacity: 0,
      duration: 1.5,
      stagger: 0.5,
      ease: 'power2.out'
    });

    gsap.from(".nav-links", {
      y: -200,
      opacity: 0,
      duration: 1.5,
      stagger: 0.5,
      ease: 'power2.out'
    });

  });


  // SET ACTIVE NAV LINK BASED ON CLICK
  const handleNavClick = (id) => {
    setActiveLink(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    setIsNavOpen(false);
  };

  // SET ACTIVE NAV LINK BASED ON SCROLL
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
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


  // FOR CHANGING COLOR OF NAVBAR
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div ref={navbarRef} className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <img src={navlogo} alt="" className='navbar-logo' />

        <div className="navbar-toggle" onClick={() => { setIsNavOpen(!isNavOpen); console.log('isNavOpen:', !isNavOpen); }}>
          {isNavOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
        </div>

        <div className={`nav-links ${isNavOpen ? 'show' : ''} ${isScrolled ? 'scrolled' : ''}`}>
          <ul>
            <li><a href="#hero" className={activeLink === '#hero' ? 'active' : ''} onClick={() => handleNavClick('#hero')}>Home</a></li>
            <li><a href="#projects" className={activeLink === '#projects' ? 'active' : ''} onClick={() => handleNavClick('#projects')}>Projects</a></li>
            <li><a href="#skills" className={activeLink === '#skills' ? 'active' : ''} onClick={() => handleNavClick('#skills')}>Skills</a></li>
            <li><a href="#contact-me" className={activeLink === '#contact-me' ? 'active' : ''} onClick={() => handleNavClick('#contact-me')}>Contact Me</a></li>
            <a onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
              href={resume} download="Resume.pdf" className='dbtn resumeBTN'>
              {isHovered ? "Download" : "Resume"} <FaDownload />
            </a>
          </ul>

        </div>

      </div>
    </>
  )
}

export default Navbar