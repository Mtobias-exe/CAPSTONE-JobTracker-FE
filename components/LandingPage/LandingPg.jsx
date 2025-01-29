import './LandingPg.css';
import React from 'react';
import Navbar from '../Navbar/Navbar';

function LandingPg() {
  return (
    <>
    {/* Nav bar component */}
        <Navbar/>
        <section className='hero'>
            <div className='hero-container'>
                <div className='column-left'>
                    <h1>Job Tracker</h1>
                    <p>Feeling Overwhelmed by Job Hunting? Let Job Tracker Simplify Your Search</p>
                    <button>Get Started</button>
                </div>
                <div className='column-right'>
                    <img src='/landingpage.png' alt='working-illustration' className='hero-img'/>    
                </div>
            </div>
        </section>
        <section className='demo'>
            <div className='demo-container'>
                {/* Preview of Dashboard */}
            </div>
        </section>
    </>
  );
}

export default LandingPg;