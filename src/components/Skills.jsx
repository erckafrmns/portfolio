import React from 'react'
import data from '../data';
import './Skills.css';


const Skills = () => {

    const { skills } = data; 

    return (
        <>
            <section className='skills'id='skills'> 
                <div className='skills-left'>
                    <h1>SKILLS</h1>
                    <div class="vertical-line"></div>
                </div>

                <div className='skills-right'>
                    <div className='languages'>
                        <h1>Languages</h1>
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
                        <h1>Frameworks</h1>
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
                        <h1>Other Tools</h1>
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