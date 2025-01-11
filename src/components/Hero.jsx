import React, { useState, useEffect, useRef } from 'react';
import data from '../data';
import './Hero.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";



const Hero = () => {

    const heroContent = useRef();

    useGSAP(() => {
        gsap.from(".hero-middle", {
            y: 200,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out',
        });

        gsap.from(".hero-right", {
            x: 200,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out'
        });
    });

    // Destructure data
    const { firstname, roles, intro, socials, featuredProjects } = data;

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


    function adjustHeroHeight() {
        const hero = document.querySelector('.hero');
        hero.style.height = `${window.innerHeight}px`;
    }

    // Adjust height on page load
    window.addEventListener('load', adjustHeroHeight);

    // Adjust height when resizing the window 
    window.addEventListener('resize', adjustHeroHeight);


    return (
        <>
            <section className='hero' id='hero'>
                <div ref={heroContent} className='hero-content'>

                    <div className="hero-left">

                        <div className='hero-left-content'>
                            <h1>Hi, I'm <span>{firstname}!</span></h1>
                            <h3>I am a <span>{currentRole}<span className="cursor"></span></span></h3>
                            <p>{intro}</p>
                            <div className='hero-buttons'>
                                <button className='LinkedInBTN' onClick={() => window.open(socials[2].link, '_blank')}><FaLinkedin className='hs-icons' /> {socials[2].name}</button>
                                <button className='GitHubBTN' onClick={() => window.open(socials[3].link, '_blank')}><FaGithub className='hs-icons' /> {socials[3].name}</button>
                            </div>
                        </div>

                    </div>

                    <div className='hero-right'>
                        <div className="slider">

                            <div className="slide-track">
                                {featuredProjects.map((project, index) => (
                                    <div className="slide" key={index}>
                                        <img src={project} alt={`Project ${index + 1}`} />
                                    </div>
                                ))}

                                {featuredProjects.map((project, index) => (
                                    <div className="slide" key={index}>
                                        <img src={project} alt={`Project ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
                <div class="custom-shape-divider-hero-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>

            </section>
        </>
    )
}

export default Hero