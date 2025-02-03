import './LandingPg.css';
import React from 'react';
import { Link } from 'react-router-dom';
import jtPic from '/jobtracker.png'
import demovid from '/demo.gif'
import scroll from '/scroll2.gif'

function LandingPg() {
  return (
    <>
    {/* Nav bar component */}
      
        <section className='hero'>
            <div className='hero-container'>
                <div className='column-left'>
                    <h1>Job Tracker</h1>
                    <p>Feeling Overwhelmed by Job Hunting? Let Job Tracker Simplify Your Search</p>
                    
                    <Link to="/dashboard">
                    <button className='CTA'>Let's Get Started</button>
                    </Link>
                </div>
                <div className='column-right'>
                    <img src='/landingpage.png' alt='working-illustration' className='hero-img'/>    
                </div>
            </div>
        </section>
        <div className='scroll-container'>
            <img src={scroll} alt="scroll down" />
        </div>
        <section className='demo'>
            <div className='demo-container'>
                {/* <img src={jtPic} className='demo-pic' alt='demo'/> */}
                <img src={demovid} className='demo-vid' alt='demo video'/>
            </div>
        </section>
    </>
  );
}

export default LandingPg;