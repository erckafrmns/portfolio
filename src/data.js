import html5 from './assets/skills/html5.png';
import css3 from './assets/skills/css3.png';
import javascript from './assets/skills/javascript.png';
import java from './assets/skills/java.png';
import PHP from './assets/skills/PHP.png';
import python from './assets/skills/python.png';
import SQL from './assets/skills/SQL.png';
import react from './assets/skills/React.png';
import flask from './assets/skills/Flask.png';
import django from './assets/skills/Django.png';
import express from './assets/skills/ExpressJS.png';
import laravel from './assets/skills/Laravel.png';
import git from './assets/skills/Git.png';
import docker from './assets/skills/Docker.png';
import nodejs from './assets/skills/Nodejs.png';
import xampp from './assets/skills/XAMPP.png';
import mysql from './assets/skills/MySQL.png';
import postgres from './assets/skills/PostgreSQL.png';
import facebook from './assets/socials/facebook.png';
import gmail from './assets/socials/gmail.png';
import linkedin from './assets/socials/linkedin.png';
import github from './assets/socials/github.png';
import project1 from './assets/projects/1.png';
import project2 from './assets/projects/2.png';
import project3 from './assets/projects/3.png';
import project4 from './assets/projects/4.png';
import featured1 from './assets/projects/featured/15.png';
import featured2 from './assets/projects/featured/16.png';
import featured3 from './assets/projects/featured/17.png';
import featured4 from './assets/projects/featured/16.png';
import profile from './assets/Formanes.jpg';
import resume from './assets/Resume.pdf';
import { FaReact, FaPython, FaDocker, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { BiLogoFlask, BiLogoPostgresql, BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { DiDjango } from "react-icons/di";


const data = {
    firstname: "Ericka Joy",
    
    lastname: "Formanes",

    profile: profile,

    resume: resume,
    
    roles: ["Software Developer.", "Web Developer.", "Full-stack Developer."],
    
    intro: "I have an extensive experience in creating secure and responsive web applications and programs. I also find joy in developing mobile apps and exploring various facets of software engineering.",
    
    school: "Technological University of the Philippines",
    
    contacts: {
      email: "formaneserickajoy@gmail.com",
      phone: "+639153095156",
      location: "Metro Manila, NCR, Philippines",
    },

    socials: [
      {name: "Facebook", img: facebook, link: "https://www.facebook.com/EriiSsi"},
      {name: "Gmail", img: gmail,},
      {name: "LinkedIn", img: linkedin, link: "https://www.linkedin.com/in/erickaformanes"},
      {name: "GitHub", img: github, link: "https://github.com/erckafrmns"},
    ],
    
    skills: {
      languages: [
        { name: "Python", img: python },
        { name: "Java", img: java },
        { name: "HTML5", img: html5 },
        { name: "CSS3", img: css3 },
        { name: "JavaScript", img: javascript },
        { name: "PHP", img: PHP },
        { name: "SQL", img: SQL },
      ],
      frameworks: [
        { name: "React", img: react },
        { name: "Flask", img: flask },
        { name: "Django", img: django },
        { name: "Express.js", img: express },
        { name: "Laravel", img: laravel },
      ],
      tools: [
        { name: "Git", img: git },
        { name: "Docker", img: docker },
        { name: "Node.js", img: nodejs },
        { name: "XAMPP", img: xampp },
        { name: "PostgreSQL", img: postgres },
        { name: "MySQL", img: mysql },
      ],
    },

    featuredProjects: [featured1, featured2, featured3, featured4],

    projects: [
      {
        name: "Ang Tipo Kong Kwento",
        img: project1,
        description: "This is a web-based application that generates child-friendly Tagalog stories with the use of Artificial Intelligence.",
        link: "https://www.facebook.com/EriiSsi",
        languages: [
          { icon: <FaReact />, color: "#61DAFB", name: "React" },
          { icon: <FaPython />, color: "#306998", name: "Python" },
          { icon: <BiLogoFlask />, color: "#FFFFFF", name: "Flask" },
          { icon: <BiLogoPostgresql />, color: "#336791", name: "PostgreSQL" },
          { icon: <FaDocker />, color: "#2496ED", name: "Docker" }
        ],
      },
      {
        name: "CampusCompass",
        img: project2,
        description: "CampusCompass is an innovative campus map tailored for the Technological University of the Philippines - Manila.",
        link: "https://www.facebook.com/EriiSsi",
        languages: [
          { icon: <BiLogoTypescript />, color: "#3178C6", name: "TypeScript" },
          { icon: <FaHtml5 />, color: "#E34F26", name: "HTML5" },
          { icon: <FaCss3Alt />, color: "#1572B6", name: "CSS3" },
          { icon: <FaNodeJs />, color: "#68A063", name: "Node.js" }
        ],
      },
      {
        name: "Markdown to HTML Converter",
        img: project3,
        description: "Markdown to HTML Converter is a web-based application that lets you convert Markdown to HTML seamlessly.",
        link: "https://www.facebook.com/EriiSsi",
        languages: [
          { icon: <FaHtml5 />, color: "#E34F26", name: "HTML5" },
          { icon: <FaCss3Alt />, color: "#1572B6", name: "CSS3" },
          { icon: <BiLogoJavascript />, color: "#F7DF1E", name: "JavaScript" },
          { icon: <FaNodeJs />, color: "#68A063", name: "Node.js" },
          { icon: <SiExpress />, color: "#FFFFFF", name: "Express" }
        ],
      },
      {
        name: "Properties Settlement",
        img: project4,
        description: "This is a web app that enables users to settle their inheritance or property using the sealed bid method.",
        link: "https://www.facebook.com/EriiSsi",
        languages: [
          { icon: <FaHtml5 />, color: "#E34F26", name: "HTML5" },
          { icon: <FaCss3Alt />, color: "#1572B6", name: "CSS3" },
          { icon: <BiLogoJavascript />, color: "#F7DF1E", name: "JavaScript" },
          { icon: <FaPython />, color: "#306998", name: "Python" },
          { icon: <DiDjango />, color: "#FFFFFF", name: "Django" }
        ],
      },
    ],
    
    
  };
  
  export default data;
  