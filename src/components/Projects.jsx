import React from 'react'
import data from '../data';
import './Projects.css';
import { BsBoxArrowUpRight } from "react-icons/bs";


const Projects = () => {

    const { projects } = data; 

    return (
        <>
            <section className='projects' id='projects'>
                <div className="project-bg"></div>
                <div className='project-content'>
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