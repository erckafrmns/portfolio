import React from 'react'
import data from '../data';
import './Projects.css';


const Projects = () => {

    const { projects } = data; 

    return (
        <>
            <section className='projects' id='projects'>
                <div className="project-top-bg"></div>
                <div className='project-top'>
                    
                    <div className="project-top-content">
                        <h1>Projects</h1>
                        <div className="featured-container">
                            <h2>Featured:</h2>
                            <div className="features">

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="project-bot">

                    <ul>
                        {projects.map((project, index) => (
                            <li key={index}>
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                                <div className='projects-languages'>
                                    {project.languages}
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