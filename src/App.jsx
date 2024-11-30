import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import data from './data';

function App() {

    const { firstname, lastname, intro, school, contacts } = data; // Destructure data

    return (
        <>
            <Navbar/>
            <section className='hero'>
                <div className='hero-left'>
                    <h1>Hi, I'm {firstname}!</h1>
                    <h3>I am a Software Developer.</h3>
                    <p>{intro}</p>
                </div>
                <div className='hero-right'>
                    <h1>image</h1>
                </div>
                
            </section>
        </>
    );
}

export default App;
