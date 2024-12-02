import React, { useState } from 'react';
import './Navbar.css'; 
import { FaDownload } from "react-icons/fa6";
import data from '../data';
import navlogo from '../assets/navbar-logo.png';


const Navbar = () => {

  const { firstname, lastname, school, about, contacts } = data; // Destructure data

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
        <div className='navbar'>
            <img src={navlogo} alt="" />
            <div className='nav-links'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Contact Me</a></li>
                    <li>
                        <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                          {isHovered ? "Download" : "Resume"} <FaDownload />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar