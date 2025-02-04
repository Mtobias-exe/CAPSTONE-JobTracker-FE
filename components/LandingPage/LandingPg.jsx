import './LandingPg.css';
import { Link } from 'react-router-dom';
import demovid from '/demo.gif'


function LandingPg() {
 
  return (
    <>
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
            
            <p className='instruction'>Demo Below</p>
            
            <img src='/scroll-down.png' alt="scroll down" className='scrollIcon'/>
        </div>
        <section className='demo'>
            <div className='demo-container'>
                <img src={demovid} className='demo-vid' alt='demo video'/>
            </div>
        </section>
    </>
  );
}

export default LandingPg;