import React from 'react'
import './Navbar.css'; 
import { FaDownload } from "react-icons/fa6";
import data from '../data';


const Navbar = () => {

  const { firstname, lastname, school, about, contacts } = data; // Destructure data


  return (
    <>
        <div className='navbar'>
            <h1>{firstname} <span>{lastname}</span></h1>
            <div className='nav-links'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Contact Me</a></li>
                    <li><button>Resume <FaDownload /></button></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar