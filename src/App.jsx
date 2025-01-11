import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';
import { IoIosArrowDropupCircle } from "react-icons/io";


function App() {

    const [showBackToTop, setShowBackToTop] = useState(false);

    const handleScroll = () => {
        const distanceFromBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

        if (distanceFromBottom <= 400) {
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <Footer />

            {showBackToTop && (
                <div className={`back-to-top-wrapper ${showBackToTop ? 'show' : ''}`} >

                    <button className="back-to-top-btn" onClick={scrollToTop}>
                        <IoIosArrowDropupCircle />
                    </button>
                    <span className="back-to-top-text">Back to Top</span>
                </div>
            )}
        </>
    );
}

export default App;
