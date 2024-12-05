import React from 'react'
import './Footer.css'; 
import data from '../data';

const Footer = () => {

    const { firstname, lastname, socials, profile } = data; 

    return (
        <>
            <div className='footer'>
                <img src={profile} alt="" className='profileIMG'/>
                <h1>{firstname} {lastname}</h1>
                <p>If you’re looking for someone who is passionate, eager to learn, and ready to contribute, I’d be thrilled to play a role in your team’s success.</p>
                <div className='footer-socials'>
                    <ul>
                        <li>
                            <a href={socials[0].link} target="_blank" rel="noopener noreferrer"><img src={socials[0].img} alt={socials[0].name} /></a>
                        </li>
                        <li>
                            <a href="mailto:formaneserickajoy@gmail.com"><img src={socials[1].img} alt={socials[1].name} /></a>
                        </li>
                        <li>
                            <a href={socials[2].link} target="_blank" rel="noopener noreferrer"><img src={socials[2].img} alt={socials[2].name} /></a>
                        </li>
                        <li>
                            <a href={socials[3].link} target="_blank" rel="noopener noreferrer"><img src={socials[3].img} alt={socials[3].name} /></a>
                        </li>
                    </ul>
                </div>
                <h4>© Copyright 2024. All Rights Reserved.</h4>
            </div>
        </>
    )
}

export default Footer