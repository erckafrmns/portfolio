import React from 'react'
import data from '../data';
import './Skills.css';


const Skills = () => {

    const { skills } = data; 

    return (
        <>
            <section className='skills'id='skills'> 
                <div class="custom-shape-divider-skills-top">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className='skills-left'>
                    <h1>Skills</h1>
                    {/* <div class="vertical-line"></div> */}
                </div>

                <div className='skills-right'>
                    <div className='languages'>
                        {/* <h1>Languages</h1> */}
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
                        {/* <h1>Frameworks</h1> */}
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
                        {/* <h1>Other Tools</h1> */}
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
        </>
    )
}

export default Skills