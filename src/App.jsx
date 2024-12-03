import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';


function App() {
    
    return (
        <>
            <Navbar/>
            <Hero/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>                          
        </>
    );
}

export default App;
