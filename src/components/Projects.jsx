import React, {useRef} from 'react'
import data from '../data';
import './Projects.css';
import { BsBoxArrowUpRight } from "react-icons/bs";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)


const Projects = () => {

    const { projects } = data; 
    const projectRef = useRef();


    useGSAP(() => {
        const oddItems = projectRef.current.querySelectorAll('.odd');
        const evenItems = projectRef.current.querySelectorAll('.even');
        
        oddItems.forEach(item => {
            gsap.from(item, {
                x: -300,
                opacity: -1,
                duration: 3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "center center",
                    scrub: true,
                }
            });
        });

        evenItems.forEach(item => {
            gsap.from(item, {
                x: 500,
                opacity: -1,
                duration: 3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "center center",
                    scrub: true,
                }
            });
        });
    });



    return (
        <>
            <section className='projects' id='projects'>
                <div className="project-bg"></div>
                <div ref={projectRef} className='project-content'>
                    <h1>Projects</h1>
                    <ul>
                        {projects.map((project, index) => (
                            <li key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                                <img src={project.img} alt="" />
                                <div className='pc-right'>
                                    <h2>{project.name}</h2>
                                    <div className="pc-descrip">
                                        <p>{project.description}</p>
                                    </div>
                                    <div className='project-languages'>
                                        {project.languages.map((language, langIndex) => (
                                            <div className="icon-wrapper" key={langIndex}>
                                            <h3 style={{ color: language.color }} className="icon">{language.icon}</h3>
                                            <span className="tooltip">{language.name}</span>
                                          </div>
                                        ))}
                                    </div>
                                    <a href={project.link} className='gitBTN'>Github Repo <BsBoxArrowUpRight className='gitIcon'/></a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>  
            </section>
        </>
    )
}

export default Projects