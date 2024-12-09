import React, {useRef} from 'react'
import data from '../data';
import './Skills.css';
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)


const Skills = () => {

    const { skills } = data; 
    const skillsRef = useRef();

    useGSAP(() => {
        
        gsap.from(".skill-content h1, .skill-content p", {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: skillsRef.current,
                start: "top bottom+=10%", 
                end: "center center",
                scrub: true,
            }
        });
    
        gsap.from(".languages-list, .frameworks-list, .others-list", {
            x: (index) => index % 2 === 0 ? -300 : 300, 
            opacity: 0,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: skillsRef.current,
                start: "top bottom+=10%",
                end: "center center", 
                scrub: true,
                stagger: 0.5, 
            }
        });

        // gsap.to(".languages-list img, .frameworks-list img, .others-list img", {
        //     opacity: 0,          
        //     duration: 2,        
        //     repeat: 1,              
        //     ease: "none", 
        //     onRepeat: () => { const images = document.querySelectorAll(".languages-list img, .frameworks-list img, .others-list img");
        //         images.forEach(image => {
        //             const randomChance = Math.random();
        //             if (randomChance > 0.5) {
        //             gsap.to(image, { opacity: 1, duration: 0.5 });
        //             } else {
        //             gsap.to(image, { opacity: 0, duration: 0.5 });
        //             }
        //         });
        //     },
        //     scrollTrigger: {
        //         trigger: skillsRef.current, 
        //         start: "top bottom+=10%",    
        //         end: "center center",    
                
        //     },
        //     onComplete: () => {
        //         gsap.to(".languages-list img, .frameworks-list img, .others-list img", {
        //             opacity: 1,
        //             duration: 0.5
        //         });
        //     }
        // });

    });

    return (
        <>
            <section className='skills'id='skills'> 
                <div class="custom-shape-divider-skills-top">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>

                <div ref={skillsRef} className="skill-content">
                    <h1>Skills</h1>
                    <p>Here are some technologies I’ve worked with, but I'm always eager to learn new ones and adapt to constantly changing field of software development. </p>
                
                    <div className="skill-list">

                        <div className="skill-list-items">
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

                        <div className="skill-list-items">
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

                        <div className="skill-list-items">
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
                </div>

            </section>
        </>
    )
}

export default Skills